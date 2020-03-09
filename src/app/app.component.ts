import { Component, OnInit } from '@angular/core';
import cytoscape from 'cytoscape';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalLinkingFieldComponent } from './components/modal-linking-field/modal-linking-field.component';
import { ModalNewParentComponent } from './components/modal-new-parent/modal-new-parent.component';
import { ModalDataFieldComponent } from './components/modal-data-field/modal-data-field.component';
import { ModalUploadExcelComponent } from './components/modal-upload-excel/modal-upload-excel.component';
import { LinkingService } from './services/linkingservice.service';
import { DataFieldService } from './services/data-field.service';
import { UploadExcelService } from './services/upload-excel.service';
import { NewNodeService } from './services/new-node.service';
import * as XLSX from 'xlsx';

type AOA = any[][]; //AOA = Arrays of Arrays.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: AOA = [[1, 2], [3, 4]];
  public mainNodeData = [
    { /* This first JSON, refers to the parent node  */
      'Name': 'Progress Items', // Father's name
      'Rol': 'Parent', // Type of node to be
      'Locked': true // If it is blocked or can be moved freely
    },
    /* The next nodes will be the children */
    {
      'Name': 'Task ID', // Child Node Name
      'Rol': 'Link', // Type of node to be
      'Parent': 'Progress Items', // Node Father
      'Locked': true, // If it is blocked or can be moved freely
      'Position': { // Node position
        'x': 100,
        'y': 100
      },
      'Style': { // Node styles, for more information see the Cytoscape information
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'background-color': '#4287f5',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'PDS-L1',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 125
      },
      'Style': {
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'background-color': '#4287f5',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'PDS-L2',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 150
      },
      'Style': {
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'background-color': '#4287f5',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'PDS-L3',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 175
      },
      'Style': {
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'background-color': '#4287f5',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'PDS-L4',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 200
      },
      'Style': {
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'background-color': '#4287f5',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'LOC-L1',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 225
      },
      'Style': {
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'background-color': '#4287f5',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'LOC-L2',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 250
      },
      'Style': {
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'background-color': '#4287f5',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'LOC-L3',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 275
      },
      'Style': {
        'text-valign': 'center',
        'text-halign': 'left',
        'label': 'data(label)',
        'background-color': '#4287f5',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'Name',
      'Rol': 'Data',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 300
      },
      'Style': {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'left',
        'background-color': '#32a836',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'Planned Start',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 325
      },
      'Style': {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'left',
        'background-color': '#32a836',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'Planned Finish',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 350
      },
      'Style': {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'left',
        'background-color': '#32a836',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'Weight',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 375
      },
      'Style': {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'left',
        'background-color': '#32a836',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'Description',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 400
      },
      'Style': {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'left',
        'background-color': '#32a836',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }, {
      'Name': 'PDS-L4 Description',
      'Rol': 'Link',
      'Parent': 'Progress Items',
      'Locked': true,
      'Position': {
        'x': 100,
        'y': 425
      },
      'Style': {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'left',
        'background-color': '#32a836',
        'shape': 'round-tag',
        'width': '13',
        'height': '13',
        'text-margin-x': -5
      }
    }
  ];
  public cy: cytoscape;
  public nodeParent: String = null;
  public nodeStyle: any = {
    node: null,
    backgroundStyle: null
  };
  public colorEdge: String;
  public linkingFeldStyle: any = {
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

  public dataStyleExcel: any = {
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

  constructor(
    private modalService: NgbModal,
    public linkingService: LinkingService,
    public dataFieldService: DataFieldService,
    public uploadExcelService: UploadExcelService,
    public newNodeService: NewNodeService
  ) { }

  ngOnInit() {
    var node_1 = null;
    var node_2 = null;
    var doubleTap = false;

    /*
    * It removes any object of type 'Node' or 'Edge' that is 
    * passed to it by parameters.
    */
    var deleteEdgeOrNode = (e) => {
      this.cy.remove(e);
    }

    this.newNodeService.statusFile.subscribe(node => this.nodeParent = node);

    /*
    * Service for uploading an excel file to show 
    * the information in Cytoscape
    */
    this.uploadExcelService.statusFile.subscribe(target => {
      /* wire up file reader */
      if (target.files.length !== 1) throw new Error('Cannot use multiple files');
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        var s = 0;
        let positionX = 200;
        /* grab first sheet */
        wb.SheetNames.forEach(wsname => {
          const ws: XLSX.WorkSheet = wb.Sheets[wsname];

          let idParent = this.getRandomId();
          let positionY = 100;

          /* save data */
          this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));

          let dataFilter = this.data.filter(d => d.length > 0);

          /* Create the nodes */
          this.cy.add([{ data: { id: idParent, label: 'Excel Sheet: ' + wsname } }]);
          for (var i = 0; i < dataFilter[0].length; i++) {
            let idData = this.getRandomId();
            this.cy.add([{ group: 'nodes', data: { id: idData, label: dataFilter[0][i], parent: idParent }, grabbable: false, position: { x: positionX, y: positionY } }]);
            this.cy.style().selector('#' + idData).style(this.dataStyleExcel).update();
            this.cy.on('tap', '#' + idData, function (e) {
              if (!this.isParent()) {
                if (node_1 == null) {
                  node_1 = this;
                } else {
                  node_2 = this;
                  setEdges(node_2._private.data.id);
                }
                selectNode(this._private);
              }
            });
            positionY += 25;


          }
          positionX += 300;
        });

      };
      reader.readAsBinaryString(target.files[0]);
    })

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
      this.cy.style().selector('#' + idLink).style(this.linkingFeldStyle).update();

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
      this.cy.on('tap', '#' + idLink, function (e) {
        if (!this.isParent()) {
          if (node_1 == null) {
            node_1 = this;
          } else {
            node_2 = this;
            setEdges(node_2._private.data.id);
          }
          selectNode(this._private);
        }
      });
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
      this.cy.nodes().on('tap', '#' + idData, function (e) {
        if (!this.isParent()) {
          if (node_1 == null) {
            node_1 = this;
          } else {
            node_2 = this;
            setEdges(node_2._private.data.id);
          }
          selectNode(this._private);
        }
      });
    })

    /*
    * We start Cytoscape with the initial configuration
    */
    this.cy = cytoscape({

      container: document.getElementById('cy'),

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
      pan: { x: 200, y: 50 }
    });

    /*
    * Create the links between nodes
    */
    var createEdge = (node) => {
      /* We check that the parent of the first selected node is the same as the main 'Progress Items' node */
      if (node_1.parent()._private.data.id == this.nodeParent) {
        let color = this.colorEdge;

        /* We create the link between nodes and give it its style */
        this.cy.add({ group: 'edges', data: { id: node_1._private.data.id + '_' + node, source: node_1._private.data.id, target: node } });
        this.cy.style().selector('#' + node_1._private.data.id + '_' + node).style({
          'width': 3,
          'line-color': color,
          'target-arrow-color': color,
          'target-arrow-shape': 'triangle',
          "curve-style": "unbundled-bezier",
          "control-point-distances": [5, -5],
          "control-point-weights": [0.250, 0.75]
        }).update();
      } else { /* If the parent of the first node is not equal to the main 'Progress Items' node */
        let color = node_2._private.style['background-color'].strValue;

        /* We create the link between nodes and give it its style */
        this.cy.add({ group: 'edges', data: { id: node + '_' + node_1._private.data.id, source: node, target: node_1._private.data.id } })
        this.cy.style().selector('#' + node + '_' + node_1._private.data.id).style({
          'width': 3,
          'line-color': color,
          'target-arrow-color': color,
          'target-arrow-shape': 'triangle',
          "curve-style": "unbundled-bezier",
          "control-point-distances": [5, -5],
          "control-point-weights": [0.250, 0.75]
        }).update();
      }
      node_1 = null;
      node_2 = null;
    }

    /*
    * Checks if links already exist between nodes or between other parent nodes
    */
    var checkEdges = (node) => {
      let jsonData = this.cy.json();
      let idNode;
      let idEdge;
      let nodeData;
      let edgesData;

      /* We check that the parent of the first selected node is the same as the main 'Progress Items' node */
      if (node_1.parent()._private.data.id == this.nodeParent) {
        idNode = node_1._private.data.id;
        idEdge = node_1._private.data.id + '_' + node;
        nodeData = node_2;
      } else {
        idNode = node;
        idEdge = node + '_' + node_1._private.data.id;
        nodeData = node_1;
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
              deleteEdgeOrNode(this.cy.getElementById(data[0] + "_" + data[1]));
            }
          });
        } else { /* If the node is of type Data */
          /* We go through all the links between data type nodes */
          jsonData.elements.edges.forEach(e => {
            let data = e.data.id;
            data = data.split("_");

            /* Check if there's already a link to that node and remove it */
            if (idNode === data[0]) {
              deleteEdgeOrNode(this.cy.getElementById(data[0] + "_" + data[1]));
            }
          });
        }
      }
      createEdge(node);
    }

    /*
    * Main function to create the links between nodes
    */
    var setEdges = (node) => {
      /* Check that the nodes to be linked are not the same or do not have the same parent */
      if (node_1._private.data.id != node_2._private.data.id && node_1.parent() != node_2.parent()) {
        let jsonData = this.cy.json();
        /* Check that one of the two nodes to be linked has as its parent the main node */
        if (node_1.parent()._private.data.id == this.nodeParent || node_2.parent()._private.data.id == this.nodeParent) {
          /* Checks for linked nodes */
          if (jsonData.elements.hasOwnProperty('edges')) {
            checkEdges(node);
          } else { /* Creates the link between the nodes */
            createEdge(node);
          }
        }
      }
    }

    /*
    * Changes the color of the selected node to mark it 
    */
    var selectNode = (node) => {
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
    }

    /* Add the menu */
    this.cy.add(
      [
        { group: 'nodes', data: { id: 'addLinkingField', label: 'Add Linking Field', parent: 'addLinking' }, selected: false, grabbable: false, position: { x: 200, y: 30 } },
        { group: 'nodes', data: { id: 'addDataField', label: 'Add Data Field', parent: 'addData' }, selected: false, grabbable: false, position: { x: 375, y: 30 } },
        { group: 'nodes', data: { id: 'getJsonData', label: 'Generate Data JSON', parent: 'getJson' }, selected: false, grabbable: false, position: { x: 600, y: 30 } },
        { group: 'nodes', data: { id: 'uploadExcel', label: 'Upload Excel', parent: 'upExcel' }, selected: false, grabbable: false, position: { x: 805, y: 30 } },
        { data: { id: 'addLinking', label: '', parent: 'Menu' }, selected: false, grabbable: false },
        { data: { id: 'addData', label: '', parent: 'Menu' }, selected: false, grabbable: false },
        { data: { id: 'getJson', label: '', parent: 'Menu' }, selected: false, grabbable: false },
        { data: { id: 'upExcel', label: '', parent: 'Menu' }, selected: false, grabbable: false },
        { data: { id: 'Menu', label: 'Menu' } }
      ]
    );

    /* Add all styles */
    this.cy.style().selector('#addLinkingField').css({
      'label': 'data(label)',
      "text-valign": "center",
      "text-halign": "right",
      'background-color': 'white',
      'background-image': './assets/ico/link.png',
      "width": "20",
      "height": "20",
      "shape": "rectangle",
      'background-fit': 'cover cover',
      'background-image-opacity': 1,
      'text-margin-x': 5
    }).update();

    this.cy.style().selector('#addDataField').css({
      'label': 'data(label)',
      "text-valign": "center",
      "text-halign": "right",
      'background-color': 'white',
      'background-image': './assets/ico/data.png',
      "width": "20",
      "height": "20",
      "shape": "rectangle",
      'background-fit': 'cover cover',
      'background-image-opacity': 1,
      'text-margin-x': 5
    }).update();

    this.cy.style().selector('#getJsonData').css({
      'label': 'data(label)',
      "text-valign": "center",
      "text-halign": "right",
      'background-color': 'white',
      'background-image': './assets/ico/json.png',
      "width": "20",
      "height": "20",
      "shape": "rectangle",
      'background-fit': 'cover cover',
      'background-image-opacity': 1,
      'text-margin-x': 5
    }).update();

    this.cy.style().selector('#uploadExcel').css({
      'label': 'data(label)',
      "text-valign": "center",
      "text-halign": "right",
      'background-color': 'white',
      'background-image': './assets/ico/excel.png',
      "width": "20",
      "height": "20",
      "shape": "rectangle",
      'background-fit': 'cover cover',
      'background-image-opacity': 1,
      'text-margin-x': 5
    }).update();

    /* Eliminates double-tapped links */
    this.cy.on('tap', 'edge', function (evt) {
      let interval;
      if (doubleTap == false) {
        doubleTap = true;
        interval = setInterval(() => {
          if (doubleTap == true) {
            doubleTap = false;
            clearInterval(interval);
          }
        }, 1000)
      } else {
        deleteEdgeOrNode(this);
      }
    });

    /* Adds Click or tap functionality to new nodes */
    this.cy.nodes().on('tap', function (e) {
      if (!this.isParent()) {
        if (node_1 == null) {
          node_1 = this;
        } else {
          node_2 = this;
          setEdges(node_2._private.data.id);
        }
        selectNode(this._private);
      }
    });

    /* Displays the modal for introducing a new Linking Field */
    this.cy.on('tap', '#addLinking', () => {
      let modalRef = this.modalService.open(ModalLinkingFieldComponent);
      if (this.nodeParent == null) {
        let modalRef = this.modalService.open(ModalNewParentComponent);
      }
    })

    /* Displays the modal for entering a new Data Field */
    this.cy.on('tap', '#addData', () => {
      let modalRef = this.modalService.open(ModalDataFieldComponent);
      if (this.nodeParent == null) {
        let modalRef = this.modalService.open(ModalNewParentComponent);
      }
    })

    /* Displays the modal for selecting an excel file */
    this.cy.on('tap', '#upExcel', () => {
      let modalRef = this.modalService.open(ModalUploadExcelComponent);
    })

    /* Return a json with all the node information */
    var dataJSON = () => {
      return this.cy.json();
    }

    /* It shows a json with all the information of the nodes */
    this.cy.on('tap', '#getJson', function () {
      console.log(dataJSON());
    })

    /*
    * Generates a main node that is parameterized as an array
    */
    var mainNode = (nodes) => {
      if (nodes.length > 0) {
        nodes.forEach(e => {
          let idNode = this.getRandomId();
          if (e.Rol == 'Parent') {
            this.nodeParent = idNode;
            if (e.Locked) {
              this.cy.add({ data: { id: idNode, label: e.Name, rol: 'Parent' }, selected: false, selectable: false, locked: true, grabbable: false, pannable: false });
            } else {
              this.cy.add({ data: { id: idNode, label: e.Name, rol: 'Parent' } });
            }

            if (e.hasOwnProperty('Style')) {
              this.cy.style().selector('#' + idNode).style(e.Style).update();
            }
          } else {
            if (e.Locked) {
              this.cy.add({ group: 'nodes', data: { id: idNode, label: e.Name, parent: this.nodeParent, rol: e.Rol }, grabbable: false, position: { x: e.Position.x, y: e.Position.y } });
            } else {
              this.cy.add({ group: 'nodes', data: { id: idNode, label: e.Name, parent: this.nodeParent, rol: e.Rol }, position: { x: e.Position.x, y: e.Position.y } });
            }

            if (e.hasOwnProperty('Style')) {
              this.cy.style().selector('#' + idNode).style(e.Style).update();
            }
          }
          this.cy.on('tap', '#' + idNode, function () {
            if (!this.isParent()) {
              if (node_1 == null) {
                node_1 = this;
              } else {
                node_2 = this;
                setEdges(node_2._private.data.id);
              }
              selectNode(this._private);
            }
          })
        });
      }
    }

    mainNode(this.mainNodeData);
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
}
