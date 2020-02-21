import { Component, OnInit } from '@angular/core';
import cytoscape from 'cytoscape';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cy: any;
  public nodeId1: String = null;
  public nodeStyle: any = {
    node: null,
    backgroundStyle: null
  };
  public linkingFeldStyle: any = {
    "text-valign": "center",
    "text-halign": "left",
    'label': 'data(id)',
    'background-color': '#4287f5',
    "shape": "tag",
    "width": "10",
    "height": "10"
  }

  public dataFieldStyle: any = {
    'label': 'data(id)',
    "text-valign": "center",
    "text-halign": "left",
    'background-color': '#32a836',
    "shape": "tag",
    "width": "10",
    "height": "10"
  }

  public dataStyle: any = {
    'label': 'data(label)',
    "text-valign": "center",
    "text-halign": "right",
    'background-color': '#c2beb2',
    "shape": "round-tag",
    "width": "10",
    "height": "10"
  }

  constructor() { }

  ngOnInit() {
    this.cy = cytoscape({

      container: document.getElementById('cy'),

      style: [
        {
          selector: ':parent',
          style: {
            'text-valign': 'top',
            'text-halign': 'center',
            'label': 'data(id)'
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
            "control-point-weights": [0.250, 0.75]
          }
        }
      ],

      layout: {
        name: 'grid',
        rows: 1
      },
      // autolock: true
    });

    var setEdges = (node) => {
      if (this.nodeId1 == null) {
        this.nodeId1 = node;
      } else {
        this.cy.add({ group: 'edges', data: { id: this.nodeId1 + '_' + node, source: this.nodeId1, target: node } })
        this.nodeId1 = null;
      }
    }

    var selectNode = (node) => {
      if (this.nodeStyle.node == null) {
        this.nodeStyle.node = node.data.id;
        this.nodeStyle.backgroundStyle = { 'background-color': node.style['background-color'].strValue }
        this.cy.style().selector('#' + node.data.id).style({ 'background-color': 'black' }).update();
      } else {
        this.cy.style().selector('#' + this.nodeStyle.node).style(this.nodeStyle.backgroundStyle).update();
        this.nodeStyle.node = null;
        this.nodeStyle.backgroundStyle = null
      }

    }

    //Nodos de pruebas
    this.cy.add(
      [
        { group: 'nodes', data: { id: 'Task_ID', parent: 'Progress Items' }, grabbable: false, position: { x: 100, y: 100 } },
        { group: 'nodes', data: { id: 'PDS-L1', parent: 'Progress Items' }, grabbable: false, position: { x: 100, y: 115 } },
        { group: 'nodes', data: { id: 'PDS-L2', parent: 'Progress Items' }, grabbable: false, position: { x: 100, y: 130 } },
        { group: 'nodes', data: { id: 'PDS-L3', parent: 'Progress Items' }, grabbable: false, position: { x: 100, y: 145 } },
        { group: 'nodes', data: { id: 'PDS-L4', parent: 'Progress Items' }, grabbable: false, position: { x: 100, y: 160 } },
        { group: 'nodes', data: { id: 'LOC-L1', parent: 'Progress Items' }, grabbable: false, position: { x: 100, y: 175 } },
        { group: 'nodes', data: { id: 'LOC-L2', parent: 'Progress Items' }, grabbable: false, position: { x: 100, y: 190 } },
        { group: 'nodes', data: { id: 'LOC-L3', parent: 'Progress Items' }, grabbable: false, position: { x: 100, y: 205 } },
        { group: 'nodes', data: { id: 'Name', parent: 'Progress Items' }, grabbable: false, position: { x: 100, y: 220 } },
        { group: 'nodes', data: { id: 'Planned_Start', parent: 'Progress Items' }, grabbable: false, position: { x: 100, y: 235 } },
        { group: 'nodes', data: { id: 'Planned_Finish', parent: 'Progress Items' }, grabbable: false, position: { x: 100, y: 250 } },
        { group: 'nodes', data: { id: 'Weight', parent: 'Progress Items' }, grabbable: false, position: { x: 100, y: 265 } },
        { group: 'nodes', data: { id: 'Description', parent: 'Progress Items' }, grabbable: false, position: { x: 100, y: 280 } },
        { group: 'nodes', data: { id: 'PDS-L4-Description', parent: 'Progress Items' }, grabbable: false, position: { x: 100, y: 295 } },
        
        {data: {id:'Progress Items'}, selected: false, selectable: false, locked: true, grabbable: false, pannable: false}, //Caja progress items
        
        { group: 'nodes', data: { id: 'Task_ID_k', label:'Task ID', parent: 'Schedule Task' }, grabbable: false, position: { x: 500, y: 135 } },
        { group: 'nodes', data: { id: 'Name_k', label:'Name', parent: 'Schedule Task' }, grabbable: false, position: { x: 500, y: 150 } },
        { group: 'nodes', data: { id: 'Description_k', label:'Description', parent: 'Schedule Task' }, grabbable: false, position: { x: 500, y: 165 } },
        { group: 'nodes', data: { id: 'Start_Date', label:'Start Date', parent: 'Schedule Task' }, grabbable: false, position: { x: 500, y: 180 } },
        { group: 'nodes', data: { id: 'Finish_Date', label:'Finish Date', parent: 'Schedule Task' }, grabbable: false, position: { x: 500, y: 195 } },
        
        {data: {id:'Schedule Task'}},//Caja schedule task

        { group: 'nodes', data: { id: 'Weight_12k', label:'Weight', parent: 'Excel Sheet: ActivityAssigment' }, grabbable: false, position: { x: 700, y: 235 } },
        { group: 'nodes', data: { id: 'Beschreibung_12k', label:'Beschreibung', parent: 'Excel Sheet: ActivityAssigment' }, grabbable: false, position: { x: 700, y: 250 } },
        { group: 'nodes', data: { id: 'PDS-L1_12k', label:'PDS-L1', parent: 'Excel Sheet: ActivityAssigment' }, grabbable: false, position: { x: 700, y: 265 } },
        { group: 'nodes', data: { id: 'PDS-L2_12k', label:'PDS-L2', parent: 'Excel Sheet: ActivityAssigment' }, grabbable: false, position: { x: 700, y: 280 } },
        { group: 'nodes', data: { id: 'PDS-L3_12k', label:'PDS-L3', parent: 'Excel Sheet: ActivityAssigment' }, grabbable: false, position: { x: 700, y: 295 } },
        { group: 'nodes', data: { id: 'PDS-L4_12k', label:'PDS-L4', parent: 'Excel Sheet: ActivityAssigment' }, grabbable: false, position: { x: 700, y: 310 } },
        { group: 'nodes', data: { id: 'L1_12k', label:'L1', parent: 'Excel Sheet: ActivityAssigment' }, grabbable: false, position: { x: 700, y: 325 } },
        { group: 'nodes', data: { id: 'L2_12k', label:'L2', parent: 'Excel Sheet: ActivityAssigment' }, grabbable: false, position: { x: 700, y: 340 } },
        { group: 'nodes', data: { id: 'L3_12k', label:'L3', parent: 'Excel Sheet: ActivityAssigment' }, grabbable: false, position: { x: 700, y: 355 } },
        { group: 'nodes', data: { id: 'L4_12k', label:'L4', parent: 'Excel Sheet: ActivityAssigment' }, grabbable: false, position: { x: 700, y: 370 } },
        { group: 'nodes', data: { id: 'Path_12k', label:'Path', parent: 'Excel Sheet: ActivityAssigment' }, grabbable: false, position: { x: 700, y: 385 } },
        { group: 'nodes', data: { id: 'LOC-L1_12k', label:'LOC-L1', parent: 'Excel Sheet: ActivityAssigment' }, grabbable: false, position: { x: 700, y: 400 } },
        { group: 'nodes', data: { id: 'LOC-L2_12k', label:'LOC-L2', parent: 'Excel Sheet: ActivityAssigment' }, grabbable: false, position: { x: 700, y: 415 } },
        { group: 'nodes', data: { id: 'LOC-L3_12k', label:'LOC-L3', parent: 'Excel Sheet: ActivityAssigment' }, grabbable: false, position: { x: 700, y: 430 } },
        { group: 'nodes', data: { id: 'Task_ID_12k', label:'Task_ID', parent: 'Excel Sheet: ActivityAssigment' }, grabbable: false, position: { x: 700, y: 445 } },
        { group: 'nodes', data: { id: 'Task_Name_12k', label:'Task_Name', parent: 'Excel Sheet: ActivityAssigment' }, grabbable: false, position: { x: 700, y: 460 } },

        {data: {id:'Excel Sheet: ActivityAssigment'}}//Caja Excel Sheet: ActivityAssigment
      ]
    );

    //Estilos Excel Sheet: ActivityAssigment
    this.cy.style().selector('#Weight_12k').style(this.dataStyle).update();
    this.cy.style().selector('#Beschreibung_12k').style(this.dataStyle).update();
    this.cy.style().selector('#PDS-L1_12k').style(this.dataStyle).update();
    this.cy.style().selector('#PDS-L2_12k').style(this.dataStyle).update();
    this.cy.style().selector('#PDS-L3_12k').style(this.dataStyle).update();
    this.cy.style().selector('#PDS-L4_12k').style(this.dataStyle).update();
    this.cy.style().selector('#L1_12k').style(this.dataStyle).update();
    this.cy.style().selector('#L2_12k').style(this.dataStyle).update();
    this.cy.style().selector('#L3_12k').style(this.dataStyle).update();
    this.cy.style().selector('#L4_12k').style(this.dataStyle).update();
    this.cy.style().selector('#Path_12k').style(this.dataStyle).update();
    this.cy.style().selector('#LOC-L1_12k').style(this.dataStyle).update();
    this.cy.style().selector('#LOC-L2_12k').style(this.dataStyle).update();
    this.cy.style().selector('#LOC-L3_12k').style(this.dataStyle).update();
    this.cy.style().selector('#Task_ID_12k').style(this.dataStyle).update();
    this.cy.style().selector('#Task_Name_12k').style(this.dataStyle).update();

    //Estilo de los nodos Linking Field;
    this.cy.style().selector('#Task_ID').style(this.linkingFeldStyle).update();
    this.cy.style().selector('#PDS-L1').style(this.linkingFeldStyle).update();
    this.cy.style().selector('#PDS-L2').style(this.linkingFeldStyle).update();
    this.cy.style().selector('#PDS-L3').style(this.linkingFeldStyle).update();
    this.cy.style().selector('#PDS-L4').style(this.linkingFeldStyle).update();
    this.cy.style().selector('#LOC-L1').style(this.linkingFeldStyle).update();
    this.cy.style().selector('#LOC-L2').style(this.linkingFeldStyle).update();
    this.cy.style().selector('#LOC-L3').style(this.linkingFeldStyle).update();
    
    //Estilo de los nodos Linking Field;
    this.cy.style().selector('#Name').style(this.dataFieldStyle).update();
    this.cy.style().selector('#Planned_Start').style(this.dataFieldStyle).update();
    this.cy.style().selector('#Planned_Finish').style(this.dataFieldStyle).update();
    this.cy.style().selector('#Weight').style(this.dataFieldStyle).update();
    this.cy.style().selector('#Description').style(this.dataFieldStyle).update();
    this.cy.style().selector('#PDS-L4-Description').style(this.dataFieldStyle).update();

    //Estilos Schedule Task
    this.cy.style().selector('#Task_ID_k').style(this.dataStyle).update();
    this.cy.style().selector('#Name_k').style(this.dataStyle).update();
    this.cy.style().selector('#Description_k').style(this.dataStyle).update();
    this.cy.style().selector('#Start_Date').style(this.dataStyle).update();
    this.cy.style().selector('#Finish_Date').style(this.dataStyle).update();

    this.cy.nodes().on('click', function (e) {
      let idNode = this._private.data.id;
      //console.log(this._private); //Información del nodo al que se dio click.
      setEdges(idNode);
      selectNode(this._private);
    });
  }
}
