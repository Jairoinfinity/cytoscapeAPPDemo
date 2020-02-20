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
    'label': 'data(id) ',
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
      autolock: true
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
        { group: 'nodes', data: { id: 'Task_ID' }, position: { x: 100, y: 100 } },
        { group: 'nodes', data: { id: 'PDS-L1' }, position: { x: 100, y: 115 } },
        { group: 'nodes', data: { id: 'PDS-L2' }, position: { x: 100, y: 130 } },
        { group: 'nodes', data: { id: 'PDS-L3' }, position: { x: 100, y: 145 } },
        { group: 'nodes', data: { id: 'PDS-L4' }, position: { x: 100, y: 160 } },
        { group: 'nodes', data: { id: 'LOC-L1' }, position: { x: 100, y: 175 } },
        { group: 'nodes', data: { id: 'LOC-L2' }, position: { x: 100, y: 190 } },
        { group: 'nodes', data: { id: 'LOC-L3' }, position: { x: 100, y: 205 } },
        { group: 'nodes', data: { id: 'Name' }, position: { x: 100, y: 220 } },
        { group: 'nodes', data: { id: 'Planned_Start' }, position: { x: 100, y: 235 } },
        { group: 'nodes', data: { id: 'Planned_Finish' }, position: { x: 100, y: 250 } },
        { group: 'nodes', data: { id: 'Weight' }, position: { x: 100, y: 265 } },
        { group: 'nodes', data: { id: 'Description' }, position: { x: 100, y: 280 } },
        { group: 'nodes', data: { id: 'PDS-L4-Description' }, position: { x: 100, y: 295 } }
      ]
    );

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

    this.cy.nodes().on('click', function (e) {
      let idNode = this._private.data.id;
      //console.log(this._private); //Información del nodo al que se dio click.
      setEdges(idNode);
      selectNode(this._private);
    });
  }
}
