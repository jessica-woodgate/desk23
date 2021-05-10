import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GlobeComponent } from './globe.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";
import { DataService } from '../services/data.service';

describe('GlobeComponent', () => {
  let component: GlobeComponent;
  let fixture: ComponentFixture<GlobeComponent>;
  let html: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ GlobeComponent ],
      providers: [DataService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(GlobeComponent);
      component = fixture.componentInstance;
      html = fixture.debugElement;

      fixture.detectChanges();
    });
  });

  it('should create globe', () => {
    expect(component).toBeTruthy();
  });

  /*describe('list of countries dummy data', () => {
    beforeEach(() => {
      spyOn(component, 'addCoordinatePoint');
      component.listOfCountries = [{Entity : 'Afghanistan', Year: 1979, Data: 20, Latitude: 33, Longitude: 67, Area: 249000}];
      component.createGlobe();
      component.setAllPoints(1979);
      fixture.detectChanges();
    });

    /*Slider*/
    /*Check the right number of data points returned for a given year*/
    it('should call the addCoordinatePoint function', () => {
      spyOn(component, 'addCoordinatePoint');
      component.listOfCountries = [{Entity : 'Afghanistan', Year: 1979, Data: 20, Latitude: 33, Longitude: 67, Area: 249000}];
      component.createGlobe();
      component.setAllPoints(1979);
      fixture.detectChanges();
      expect(component.addCoordinatePoint).toHaveBeenCalled();
    });

    it('should call the addCoordinatePoint function 3 times', () => {
      spyOn(component, 'addCoordinatePoint');
      component.listOfCountries = [
        {Entity : 'Afghanistan', Year: 1979, Data: 20, Latitude: 33, Longitude: 67, Area: 249000},
        {Entity : 'Afghanistan', Year: 1979, Data: 20, Latitude: 33, Longitude: 67, Area: 249000},
        {Entity : 'Afghanistan', Year: 1979, Data: 20, Latitude: 33, Longitude: 67, Area: 249000}
      ];
      component.createGlobe();
      component.setAllPoints(1979);
      fixture.detectChanges();
      expect(component.addCoordinatePoint).toHaveBeenCalledTimes(3);
    });

    it('should call the addCoordinatePoint function 2 times', () => {
      spyOn(component, 'addCoordinatePoint');
      component.listOfCountries = [
        {Entity : 'Afghanistan', Year: 1900, Data: 20, Latitude: 33, Longitude: 67, Area: 249000},
        {Entity : 'Afghanistan', Year: 1900, Data: 20, Latitude: 33, Longitude: 67, Area: 249000},
        {Entity : 'Afghanistan', Year: 1980, Data: 20, Latitude: 33, Longitude: 67, Area: 249000}
      ];
      component.createGlobe();
      component.setAllPoints(1900);
      fixture.detectChanges();
      expect(component.addCoordinatePoint).toHaveBeenCalledTimes(2);
    });
  /*});*/
  
  /*it('should call the addCoordinatePoint function 25 times in 1979', () => {
    spyOn(component, 'addCoordinatePoint');
    component.ngOnInit();
    component.createGlobe();
    component.setAllPoints(1979);
    fixture.detectChanges();
    expect(component.addCoordinatePoint).toHaveBeenCalledTimes(25);
  });*/
/*  eg. 25 expected from data in 1979, do coordinate points added match? ie. 25 function calls to addCoordinatePoint
  decide on edge cases and core cases to test for each - try years with no data */

  /*Test specific countries are included for a given year, from dataset*/
  it('should include Afghanistan for given year', () => {
    component.listOfCountries = [{Entity : 'Afghanistan', Year: 1979, Data: 20, Latitude: 33, Longitude: 67, Area: 249000}];
    component.createGlobe();
    component.setAllPoints(1979);
    fixture.detectChanges();
    expect(component.globe.children).toBeTruthy();
    expect(component.globe.children[0].userData.Country).toEqual('Afghanistan');
  });
  
  /*Pop up box with country information*/
  /*Test if the displayed popup receives the correct data*/
  it('should receive country data from component', () =>{
    component.displayType = "flex";
    component.countryName = 'Afghanistan';
    component.literacyRate = '20';
    fixture.detectChanges();
    const popup_name = html.query(
      By.css('#displayCountryName')
    ).nativeElement.textContent;
    const popup_rate = html.query(
      By.css('#displayLiteracyRate')
    ).nativeElement.textContent;
    expect(popup_name).toContain('Afghanistan');
    expect(popup_rate).toContain('20');
    expect(popup_name).toBeTruthy;
    expect(popup_rate).toBeTruthy;
  });

  /*Test if we get the expected data from the data service using dummy data*/
  /*Adapted from https://codehandbook.org/how-to-unit-test-angular-component-with-service/*/
  it('should call ngOnInit and get Country[] response', fakeAsync(() =>{
    const service = fixture.debugElement.injector.get(DataService);
    let spy_ngOnInit = spyOn(service, "getCountryData").and.callFake(() => {
      return Rx.of([{Entity : 'Afghanistan', Year: 1979, Data: 20, Latitude: 33, Longitude: 67, Area: 249000}]).pipe(delay(100));
    });
    component.ngOnInit();
    tick(100);
    expect(component.listOfCountries[0].Entity).toEqual('Afghanistan');
  }));

});
