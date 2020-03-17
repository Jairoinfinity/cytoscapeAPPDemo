import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { throwError } from 'rxjs';
import { componentFactoryName } from '@angular/compiler';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
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

  describe('Test of the ngOnInit() function', () => {
    it('Function onInit', () => {
      let result = app.ngOnInit();

      expect(result);
    });
  });
  
});
