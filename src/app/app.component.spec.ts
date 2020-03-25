import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApolloTestingModule, ApolloTestingController, } from 'apollo-angular/testing';
import { Component } from '@angular/core';
import { throwError } from 'rxjs';
import { componentFactoryName } from '@angular/compiler';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let controller: ApolloTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ApolloTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    controller = TestBed.get(ApolloTestingController);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Test of the getDataJson() function', () => {
    it('return a json', () => {
      let result = app.getDataJson();

      expect(result).toBeDefined();
    });
  });

  describe('Test of the getRandomId() function', () => {
    it('return an id', () => {
      let result = app.getRandomId();

      expect(result).toBeDefined();
    });
  });

  describe('Test of the checkEdges() funcion', () => {
    it('Funtion checkEdges', () => {
      let result = app.checkEdges("lHo7DyjTvT");

      expect(result).toBeTruthy();
    })
  })

  describe('Test of the setEdges() funcion', () => {
    it('Funtion setEdges', () => {
      let result = app.setEdges("lHo7DyjTvT");

      expect(result).toBeTruthy();
    })
  })

  describe('Test of the selectNode() funcion', () => {
    it('Funtion selectNode', () => {
      let result = app.selectNode("lHo7DyjTvT");

      expect(result).toBeTruthy();
    })
  })

  /*describe('Test of the submitData() funcion', () => {
    it('Funtion submitData', () => {
      let result = app.submitData();

      expect(result).toBeTruthy();
    })
  })*/

  describe('Test of the createEdge() funcion', () => {
    it('Funtion createEdge', () => {
      let result = app.createEdge("lHo7DyjTvT");

      expect(result).toBeTruthy();
    })
  })

  describe('Test of the removeFromMappingInput() funcion', () => {
    it('Funtion removeFromMappingInput', () => {
      let result = app.removeFromMappingInput("#lHo7DyjTvT");

      expect(result).toBeTruthy();
    })
  })

  describe('Test of the getMapTypes() funcion', () => {
    it('Funtion getMapTypes', () => {
      let result = app.getMapTypes("Progress Items");

      expect(result).toBeTruthy();
    })
  })

  describe('Test of the updateMappingInput() funcion', () => {
    it('Funtion updateMappingInput', () => {
      let result = app.updateMappingInput();

      expect(result).toBeTruthy();
    })
  })

  describe('Test of the createMainNode() funcion', () => {
    it('Funtion createMainNode', () => {
      let mainNodeData = {
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
      let result = app.createMainNode(mainNodeData);

      expect(result).toBeTruthy();
    })
  })

  describe('Test of the createExtraNodes() funcion', () => {
    it('Funtion createExtraNodes', () => {
      let extraNodeData = [
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
      let result = app.createExtraNodes(extraNodeData);

      expect(result).toBe(undefined);
    })
  })

});
