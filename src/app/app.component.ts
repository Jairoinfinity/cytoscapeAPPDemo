import { Component, OnInit } from '@angular/core';
import cytoscape from 'cytoscape';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cy: any;
  public nodeId1: String = null;

  constructor() { }

  ngOnInit() {
    this.cy = cytoscape({

      container: document.getElementById('cy'), // container to render in

      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': '#F0F',
            'label': 'data(id)'
          }
        },

        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
          }
        }
      ],

      layout: {
        name: 'grid',
        rows: 1
      },
      //autolock:true
    });

    var setEdges = (node) => {
      if(this.nodeId1 == null){
        this.nodeId1 = node;
      }else{
        this.cy.add({ group: 'edges', data: { id: this.nodeId1+'_'+node, source: this.nodeId1, target: node } })
        this.nodeId1 = null;
      }
    }

    var selectNode = (node) => {
      this.cy.one('tap', node, function(){
        console.log('tap!');
      });
    }

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

    //this.cy.remove('#n0')
    this.cy.nodes().on('click', function (e) {
      let idNode = this._private.data.id;
      //console.log(e); //Toda la informacion con todos los nodos.
      console.log(this._private); //Información del nodo al que se dio click.
      setEdges(idNode);
      selectNode(idNode);
    });
  }
}
