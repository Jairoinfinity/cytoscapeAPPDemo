import { Component, OnInit, Input } from '@angular/core';
import cytoscape from 'cytoscape';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalLinkingFieldComponent } from './components/modal-linking-field/modal-linking-field.component';
import { ModalDataFieldComponent } from './components/modal-data-field/modal-data-field.component';
import { LinkingService } from './services/linkingservice.service';
import { DataFieldService } from './services/data-field.service';

import { linkingFieldIcon, dataFieldIcon, submitButtonIcon } from './icons';
import { MainNodeModel } from './models/mainNodeModel';
import { ExtraNodesModel } from './models/extraNodesModel';

@Component({
  selector: 'mapper',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Input() mainNodeData: MainNodeModel = {
    title: "Progress Items",
    linkingFields: [
      {
        label: "yo yo"
      },
      {
        label: "blah balh"
      }
    ],
    dataFields: [
      {
        label: "foo foo"
      },
      {
        label: "baz baz"
      }
    ]
  };

  @Input() extraNodesData: ExtraNodesModel[] = [
    {
      title: "test 1",
      fields: [{
        label: "hello"
      },
      {
        label: "vvvvv"
      }]
    },
    {
      title: "test 2",
      fields: [{
        label: "helloccc"
      },
      {
        label: "mmmmm"
      }]
    }
  ];

  public cy: cytoscape;
  public nodeParent: String = "mainNode";
  public nodeStyle: any = {
    node: null,
    backgroundStyle: null
  };
  public colorEdge: String;
  public linkingFieldStyle: any = {
    "text-valign": "center",
    "text-halign": "left",
    'label': 'data(label)',
    'background-color': '#4287f5',
    "shape": "round-tag",
    "width": "13",
    "height": "13",
    'text-margin-x': -5
  }

  public dataFieldStyle: any = {
    'label': 'data(label)',
    "text-valign": "center",
    "text-halign": "left",
    'background-color': '#32a836',
    "shape": "round-tag",
    "width": "13",
    "height": "13",
    'text-margin-x': -5
  }

  public dataStyleExtraNode: any = {
    'label': 'data(label)',
    "text-valign": "center",
    "text-halign": "right",
    'background-color': '#c2beb2',
    "shape": "round-tag",
    "width": "13",
    "height": "13",
    'text-margin-x': 5,
    'z-compound-depth': 'top',
    'z-index': 1
  }

  public linkingData;
  public dataField;
  public node_1 = null;
  public node_2 = null;

  public tempNode_1 = null;
  public tempNode_2 = null;

  public doubleTap = false;

  constructor(
    private modalService: NgbModal,
    public linkingService: LinkingService,
    public dataFieldService: DataFieldService
  ) { }

  ngOnInit() {

    var getDoubleTap = () => {
      return this.doubleTap
    }

    var setDoubleTap = (tap: boolean) => {
      this.doubleTap = tap;
    }

    /*
    * We start Cytoscape with the initial configuration
    */
    this.initCytoscape();

    /*
    * It removes any object of type 'Node' or 'Edge' that is 
    * passed to it by parameters.
    */
    let deleteEdgeOrNode = (e) => {
      this.deleteEdgeOrNode(e);
    }

    if (!this.mainNodeData) return;
    this.createMainNode(this.mainNodeData);

    if (!this.extraNodesData) return;
    this.createExtraNodes(this.extraNodesData);

    /*
    * Service in charge of creating a new Linking Field
    */
    this.linkingService.statusFile.subscribe(data => {
      this.linkingData = data;
      let json = this.getDataJson();
      let parentNode = json.elements.nodes.filter(n => n.data.id == this.nodeParent);
      let nodosLikns = json.elements.nodes.filter(n => n.data.parent == this.nodeParent && n.data.rol == 'Link');
      let nodosData = json.elements.nodes.filter(n => n.data.parent == this.nodeParent && n.data.rol == 'Data');
      let positionY = 100;
      let lastNode;
      let idLink = this.getRandomId();

      /* If the parent node 'Progress Items' does not exist, it is created */
      if (parentNode.length == 0) {
        this.cy.add([{ data: { id: this.nodeParent, label: this.nodeParent }, selected: false, selectable: false, locked: true, grabbable: false, pannable: false }])
      }

      /* Check if there are already 'Link' type nodes to choose the position of the last node */
      if (nodosLikns.length > 0) {
        lastNode = nodosLikns[nodosLikns.length - 1];
        positionY = (lastNode.position.y + 25);
      }

      /* Create the new node and add the style */
      this.cy.add([{ group: 'nodes', data: { id: idLink, label: data, parent: this.nodeParent, rol: 'Link' }, grabbable: false, position: { x: 100, y: positionY } }]);
      this.cy.style().selector('#' + idLink).style(this.linkingFieldStyle).update();

      /* Checks for 'Data' type nodes and if there are, removes them and adds them in a lower position */
      if (nodosData.length > 0) {
        nodosData.forEach(e => {
          let data = e;
          this.cy.remove('#' + e.data.id);
          this.cy.add([{ group: 'nodes', data: { id: e.data.id, label: e.data.label, parent: this.nodeParent, rol: 'Data' }, grabbable: false, position: { x: 100, y: (e.position.y + 25) } }]);
          this.cy.style().selector('#' + e.data.id).style(this.dataFieldStyle).update();
        });
      }

      /* Adds Click or tap functionality to new nodes */
      this.setTapNodes(idLink);
    })

    /* Service in charge of creating new 'Data Field' nodes */
    this.dataFieldService.statusFile.subscribe(data => {
      this.dataField = data;
      let json = this.getDataJson();
      let parentNode = json.elements.nodes.filter(n => n.data.id == this.nodeParent);
      let nodosLikns = json.elements.nodes.filter(n => n.data.parent == this.nodeParent && n.data.rol == 'Link');
      let nodosData = json.elements.nodes.filter(n => n.data.parent == this.nodeParent && n.data.rol == 'Data');
      let lastNode;
      let positionY = 100;
      let idData = this.getRandomId();

      /* If the parent node 'Progress Items' does not exist, it is created */
      if (parentNode.length == 0) {
        this.cy.add([{ data: { id: this.nodeParent, label: this.nodeParent }, selected: false, selectable: false, locked: true, grabbable: false, pannable: false }])
      }

      /* Check if there are 'Data' type nodes, if so, get the last position */
      if (nodosData.length > 0) {
        lastNode = nodosData[nodosData.length - 1];
        positionY = (lastNode.position.y + 25);
      } else if (nodosLikns.length > 0) { /* If no 'Data' nodes exist, check the 'Link' nodes to get the last position */
        lastNode = nodosLikns[nodosLikns.length - 1];
        positionY = (lastNode.position.y + 25);
      }

      /* Create the new node and add the style */
      this.cy.add([{ group: 'nodes', data: { id: idData, label: data, parent: this.nodeParent, rol: 'Data' }, grabbable: false, position: { x: 100, y: positionY } }]);
      this.cy.style().selector('#' + idData).style(this.dataFieldStyle).update();

      /* Adds Click or tap functionality to new nodes */
      this.setTapNodes(idData);
    })

    /* Add the menu */
    this.addMenu();

    /* Eliminates double-tapped links */
    this.cy.on('tap', 'edge', function (evt) {
      let doubleTap = getDoubleTap();
      let interval;
      if (doubleTap == false) {
        setDoubleTap(true);
        interval = setInterval(() => {
          if (doubleTap == true) {
            setDoubleTap(false);
            clearInterval(interval);
          }
        }, 1000)
      } else {
        deleteEdgeOrNode(this);
      }
    });

    /* Displays the modal for introducing a new Linking Field */
    this.cy.on('tap', '#addLinking', () => {
      let modalRef = this.modalService.open(ModalLinkingFieldComponent);
    })

    /* Displays the modal for entering a new Data Field */
    this.cy.on('tap', '#addData', () => {
      let modalRef = this.modalService.open(ModalDataFieldComponent);
    })

    /* Return a json with all the node information */
    var dataJSON = () => {
      return this.cy.json();
    }

    /* It shows a json with all the information of the nodes */
    this.cy.on('tap', '#submitData', function () {
      console.log(dataJSON());
    })
  }

  /*
  * Main function to create the links between nodes
  */
  setLinkEdges(node) {
    this.setEdges(node);
  }

  /**
   * field click function
   * @param idData field id
   */
  setTapNodes(idData: string) {
    var self = this;
    this.cy.on('tap', '#' + idData, function (e) {
      if (!this.isParent()) {
        if (self.tempNode_1 == null) {
          self.node_1 = this;
          self.tempNode_1 = this;
        } else {
          self.node_2 = this;
          self.tempNode_2 = this;
          self.setEdges(self.tempNode_2._private.data.id);
          self.tempNode_1 = null;
          self.tempNode_2 = null;
        }
        self.selectNode(this._private);
      }
    });
  }

  /*
  * Generates a main node
  */
  createMainNode(nodes: MainNodeModel) {

    // create main node
    this.cy.add({ data: { id: "mainNode", label: nodes.title, rol: 'Parent' }, selected: false, selectable: false, locked: true, grabbable: false, pannable: false });
    this.cy.style().selector('#mainNode').style({
      "border-color": "#e2e2e2",
      "background-color": "#fafafa",
      "padding-left": 15
    }).update();

    if (nodes.linkingFields.length > 0 || nodes.linkingFields.length > 0) {

      var lastY = 150;

      var elementStyle = { // Node styles, for more information see the Cytoscape information
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }

      nodes.linkingFields.forEach(e => {
        e.id = e.id ? e.id : this.getRandomId();
        this.cy.add({ group: 'nodes', data: { id: e.id, label: e.label, parent: "mainNode", rol: 'Link' }, grabbable: false, position: { x: 100, y: lastY } });
        lastY += 30;
        this.cy.style().selector('#' + e.id).style(elementStyle).css({ 'background-color': '#4287f5' }).update();
        this.setTapNodes(e.id);
      });

      nodes.dataFields.forEach(e => {
        e.id = e.id ? e.id : this.getRandomId();
        this.cy.add({ group: 'nodes', data: { id: e.id, label: e.label, parent: "mainNode", rol: 'Data' }, grabbable: false, position: { x: 100, y: lastY } });
        lastY += 30;
        this.cy.style().selector('#' + e.id).style(elementStyle).css({ 'background-color': '#32a836' }).update();
        this.setTapNodes(e.id);
      });
    }
  }

  /**
   * creates extra nodes from the 
   * @param nodes nodes to create
   */
  createExtraNodes(nodes: ExtraNodesModel[]) {
    var lastX = this.cy.$(this.nodeParent).outerWidth() + 120;

    nodes.forEach(e => {
      var lastY = 150;
      let parentID = this.getRandomId();
      /* Create the nodes */
      this.cy.add([{ data: { id: parentID, label: e.title } }]);
      this.cy.style().selector('#'+parentID).style({
        "border-color": "#e2e2e2",
        "background-color": "#fafafa",
        "padding-left": 15
      }).update();

      e.fields.forEach(e => {
        let idData = e.id ? e.id : this.getRandomId();
        this.cy.add([{ group: 'nodes', data: { id: idData, label: e.label, parent: parentID }, grabbable: false, position: { x: lastX, y: lastY } }]);
        this.cy.style().selector('#' + idData).style(this.dataStyleExtraNode).update();
        this.setTapNodes(idData);
        lastY += 30;
      });
      lastX += this.cy.$(parentID).outerWidth() + 50;

    });
  }

  /*
    * Checks if links already exist between nodes or between other parent nodes
    */
  checkEdges(node) {
    let jsonData = this.cy.json();
    let idNode;
    let idEdge;
    let nodeData;
    let edgesData;
    try {
      /* We check that the parent of the first selected node is the same as the main 'Progress Items' node */
      if (this.node_1.parent()._private.data.id == this.nodeParent) {
        idNode = this.node_1._private.data.id;
        idEdge = this.node_1._private.data.id + '_' + node;
        nodeData = this.node_2;
      } else {
        idNode = node;
        idEdge = node + '_' + this.node_1._private.data.id;
        nodeData = this.node_1;
      }

      /* Filters the data of all links between nodes that are equal to the new link you are trying to create */
      edgesData = jsonData.elements.edges.filter(n => n.data.id == idEdge);

      /* Checks if a link already created between nodes does not exist */
      if (edgesData.length == 0) {
        /* We filter to get the information of the selected main node */
        let principalNode = jsonData.elements.nodes.filter(n => n.data.id == idNode);

        /* We check if the node type is Link */
        if (principalNode[0].data.rol == 'Link') {
          /* We go through all the links between link type nodes */
          jsonData.elements.edges.forEach(e => {
            let data = e.data.id;
            data = data.split("_");

            /* We filter the secondary node */
            let target = jsonData.elements.nodes.filter(n => n.data.id == data[1]);

            /* Checks if the link node is already linked to another node of the same parent and removes that link */
            if (idNode === data[0] && target[0].data.parent == nodeData._private.data.parent) {
              this.deleteEdgeOrNode(this.cy.getElementById(data[0] + "_" + data[1]));
            }
          });
        } else { /* If the node is of type Data */
          /* We go through all the links between data type nodes */
          jsonData.elements.edges.forEach(e => {
            let data = e.data.id;
            data = data.split("_");

            /* Check if there's already a link to that node and remove it */
            if (idNode == data[0]) {
              this.deleteEdgeOrNode(this.cy.getElementById(data[0] + "_" + data[1]));
            }
          });
        }
      }
      this.createEdge(node);
    } catch (error) {
      return error
    }
  }

  /*
    * Main function to create the links between nodes
    */
  setEdges(node) {
    try {
      /* Check that the nodes to be linked are not the same or do not have the same parent */
      if (this.node_1._private.data.id != this.node_2._private.data.id && this.node_1.parent() != this.node_2.parent()) {
        let jsonData = this.cy.json();
        /* Check that one of the two nodes to be linked has as its parent the main node */
        if (this.node_1.parent()._private.data.id == this.nodeParent || this.node_2.parent()._private.data.id == this.nodeParent) {
          /* Checks for linked nodes */
          if (jsonData.elements.hasOwnProperty('edges')) {
            this.checkEdges(node);
          } else { /* Creates the link between the nodes */
            this.createEdge(node);
          }
        }
      }
    } catch (error) {
      return error
    }
  }

  /*
   * Changes the color of the selected node to mark it 
   */
  selectNode(node) {
    try {
      if (this.nodeStyle.node == null) {
        this.nodeStyle.node = node.data.id;
        this.nodeStyle.backgroundStyle = { 'background-color': node.style['background-color'].strValue }
        this.colorEdge = node.style['background-color'].strValue;
        this.cy.style().selector('#' + node.data.id).style({ 'background-color': 'black' }).update();
      } else {
        this.cy.style().selector('#' + this.nodeStyle.node).style(this.nodeStyle.backgroundStyle).update();
        this.nodeStyle.node = null;
        this.nodeStyle.backgroundStyle = null
      }
    } catch (error) {
      return error
    }
  }

  /* Add the menu */
  addMenu() {
    try {
      this.cy.add(
        [
          { group: 'nodes', data: { id: 'addLinkingField', label: 'Add Linking Field', parent: 'addLinking' }, selected: false, grabbable: false, position: { x: 0, y: 30 } },
          { group: 'nodes', data: { id: 'addDataField', label: 'Add Data Field', parent: 'addData' }, selected: false, grabbable: false, position: { x: 180, y: 30 } },
          { group: 'nodes', data: { id: 'submitDataIcon', label: 'Submit Data', parent: 'submitData' }, selected: false, grabbable: false, position: { x: 500, y: 30 } },
          { data: { id: 'addLinking', label: '', parent: 'menu' }, selected: false, grabbable: false },
          { data: { id: 'addData', label: '', parent: 'menu' }, selected: false, grabbable: false },
          { data: { id: 'submitData', label: '', parent: 'menu' }, selected: false, grabbable: false },
          { data: { id: 'menu', label: '' } }
        ]
      );

      var iconStyle = {
        'label': 'data(label)',
        "text-valign": "center",
        "text-halign": "right",
        "width": "20",
        "height": "20",
        "shape": "rectangle",
        'background-fit': 'cover cover',
        'background-image-opacity': 1,
        'text-margin-x': 5,
        'background-color': '#fff',
      }

      /* Add icon styles */
      this.cy.style().selector('#addLinkingField').css(iconStyle).css({
        'background-image': linkingFieldIcon,
        'background-color': '#fff',
        'color': '#007bff'
      }).update();

      this.cy.style().selector('#addDataField').css(iconStyle).css({
        'background-image': dataFieldIcon,
        'color': '#28a745'
      }).update();

      this.cy.style().selector('#submitDataIcon').css(iconStyle).css({
        'background-image': submitButtonIcon,
        'background-color': '#007bff',
        'color': '#fff'
      }).update();

      // add menu styles
      this.cy.style().selector('#menu').css({
        'shape': 'roundrectangle',
        'border-color': '#dae0e5',
        'background-color': '#e2e6ea'
      }).update();

      // add button styles
      this.cy.style().selector('#addLinking').css({
        'border-color': '#007bff'
      }).update();

      this.cy.style().selector('#addData').css({
        'border-color': '#28a745'
      }).update();

      this.cy.style().selector('#submitData').css({
        'border-color': '#007bff',
        'background-color': '#007bff'
      }).update();

    } catch (error) {
      return error
    }
  }

  /* Return a json with all the node information */
  getDataJson() {
    return this.cy.json();
  }

  /* Generates a random ID for the nodes */
  getRandomId() {
    let chars = "qwertyuiopasdfghjklcvbnmQWERTYUIOPASDFGHJKLXCVBNM1234567890"
    let id = "";
    for (let i = 0; i < 10; i++) {
      id += chars.charAt(Math.floor(Math.random() * 58));
    }
    return id;
  }

  /*
    * It removes any object of type 'Node' or 'Edge' that is 
    * passed to it by parameters.
    */
  deleteEdgeOrNode(e) {
    try {
      this.cy.remove(e);
    } catch (error) {
      return error
    }
  }

  /*
   * We start Cytoscape with the initial configuration
   */
  initCytoscape() {
    try {
      this.cy = cytoscape({

        container: document.getElementById('cy'),
        minZoom: 0.3,
        maxZoom: 1,

        style: [
          {
            selector: ':parent',
            style: {
              'text-valign': 'top',
              'text-halign': 'center',
              'label': 'data(label)',
              'background-color': 'white',
              'font-weight': 'bold',
              'shape': 'roundrectangle',
              'border-width': 2,
              'border-color': '#3A7ECF',
              'text-margin-y': -8,
              'overlay-color': '#ccc',
              'overlay-padding': 5
            }
          },
          {
            selector: 'edge',
            style: {
              'width': 3,
              'line-color': '#ccc',
              'target-arrow-color': '#ccc',
              'target-arrow-shape': 'triangle',
              "curve-style": "unbundled-bezier",
              "control-point-distances": [5, -5],
              "control-point-weights": [0.250, 0.75],
              'overlay-color': '#ccc',
              'overlay-padding': 5
            }
          }
        ],

        layout: {
          name: 'grid',
          rows: 1
        },
        pan: { x: 50, y: 20 }
      });
    } catch (error) {
      return error
    }
  }

  /*
    * Create the links between nodes
    */
  createEdge(node) {
    try {
      /* We check that the parent of the first selected node is the same as the main 'Progress Items' node */
      if (this.node_1.parent()._private.data.id == this.nodeParent) {
        let color = this.colorEdge;

        /* We create the link between nodes and give it its style */
        this.cy.add({ group: 'edges', data: { id: this.node_1._private.data.id + '_' + node, source: this.node_1._private.data.id, target: node } });
        this.cy.style().selector('#' + this.node_1._private.data.id + '_' + node).style({
          'width': 3,
          'line-color': color,
          'target-arrow-color': color,
          'target-arrow-shape': 'triangle',
          "curve-style": "unbundled-bezier",
          "control-point-distances": [5, -5],
          "control-point-weights": [0.250, 0.75]
        }).update();
      } else { /* If the parent of the first node is not equal to the main 'Progress Items' node */
        let color = this.node_2._private.style['background-color'].strValue;

        /* We create the link between nodes and give it its style */
        this.cy.add({ group: 'edges', data: { id: node + '_' + this.node_1._private.data.id, source: node, target: this.node_1._private.data.id } })
        this.cy.style().selector('#' + node + '_' + this.node_1._private.data.id).style({
          'width': 3,
          'line-color': color,
          'target-arrow-color': color,
          'target-arrow-shape': 'triangle',
          "curve-style": "unbundled-bezier",
          "control-point-distances": [5, -5],
          "control-point-weights": [0.250, 0.75]
        }).update();
      }
      this.node_1 = null;
      this.node_2 = null;
    } catch (error) {
      return error
    }
  }


}
