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

  constructor() { }

  ngOnInit() {
    this.cy = cytoscape({

      container: document.getElementById('cy'),

      //   {
      //     selector: 'edge',
      //     style: {
      //       'width': 3,
      //       'line-color': '#ccc',
      //       'target-arrow-color': '#ccc',
      //       'target-arrow-shape': 'triangle'
      //     }
      //   }
      // ],

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
        { group: 'nodes', data: { id: 'n0' }, position: { x: 100, y: 100 } },
        { group: 'nodes', data: { id: 'n1' }, position: { x: 200, y: 150 } },
        { group: 'nodes', data: { id: 'df' }, position: { x: 300, y: 200 } },
        { group: 'nodes', data: { id: 'nrf' }, position: { x: 400, y: 100 } },
        { group: 'nodes', data: { id: 'nref' }, position: { x: 500, y: 150 } },
        { group: 'nodes', data: { id: 'derf' }, position: { x: 600, y: 200 } }
      ]
    );

    //Estilo de los nodos;
    this.cy.style().selector('#n0').style({ 'background-color': '#F6F' }).update();
    this.cy.style().selector('#n1').style({ 'background-color': '#F6F' }).update();
    this.cy.style().selector('#df').style({ 'background-color': '#F6F' }).update();
    this.cy.style().selector('#nrf').style({ 'background-color': '#F65' }).update();
    this.cy.style().selector('#nref').style({ 'background-color': '#F65' }).update();
    this.cy.style().selector('#derf').style({ 'background-color': '#F65' }).update();

    this.cy.nodes().on('click', function (e) {
      let idNode = this._private.data.id;
      //console.log(this._private); //Información del nodo al que se dio click.
      setEdges(idNode);
      selectNode(this._private);
    });
  }
}
