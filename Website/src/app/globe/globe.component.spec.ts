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

  /*Slider*/
  /*Check the right number of data points returned for a given year*/
  describe('single same year', () => {
    beforeEach(() => {
      component.listOfCountries = [{Entity : 'Afghanistan', Year: 1979, Data: 20, Latitude: 33, Longitude: 67, Area: 249000}];
      component.createGlobe();
    });

    it('should call the addCoordinatePoint function', () => {
      spyOn(component, 'addCoordinatePoint');
      component.setAllPoints(1979);
      fixture.detectChanges();
      expect(component.addCoordinatePoint).toHaveBeenCalled();
    });

     /*Test specific countries are included for a given year*/
    it('should include Afghanistan for given year', () => {
      component.setAllPoints(1979);
      fixture.detectChanges();
      expect(component.globe.children).toBeTruthy();
      expect(component.globe.children[0].userData.Country).toEqual('Afghanistan');
    });

    /*Slider can go to years with no data, for these years, test that coordinate points on the globe not created*/
    it('should not call the addCoordinatePoint function', () => {
      spyOn(component, 'addCoordinatePoint');
      component.setAllPoints(1900);
      fixture.detectChanges();
      expect(component.addCoordinatePoint).not.toHaveBeenCalled();
    });
  });

  describe('multiple same year', () => {
    beforeEach(() => {
      component.listOfCountries = [
        {Entity : 'Afghanistan', Year: 1979, Data: 20, Latitude: 33, Longitude: 67, Area: 249000},
        {Entity : 'Jordan', Year: 1979, Data: 66, Latitude: 31, Longitude: 37, Area: 35480},
        {Entity : 'Paraguay', Year: 1979, Data: 85, Latitude: 23, Longitude: 58, Area: 157000}
      ];
      component.createGlobe();
    });

    it('should call the addCoordinatePoint function 3 times', () => {
      spyOn(component, 'addCoordinatePoint');
      component.setAllPoints(1979);
      fixture.detectChanges();
      expect(component.addCoordinatePoint).toHaveBeenCalledTimes(3);
    });

     /*Test specific countries are included for a given year*/
    it('should include Afghanistan for given year', () => {
      component.setAllPoints(1979);
      fixture.detectChanges();
      expect(component.globe.children).toBeTruthy();
      expect(component.globe.children[1].userData.Country).toEqual('Jordan');
    });

     /*Slider can go to years with no data, for these years, test that coordinate points on the globe not created*/
    it('should not call the addCoordinatePoint function', () => {
      spyOn(component, 'addCoordinatePoint');
      component.setAllPoints(2015);
      fixture.detectChanges();
      expect(component.addCoordinatePoint).not.toHaveBeenCalled();
    });
  });

  describe('two same year, one different year', () => {
    beforeEach(() => {
      component.listOfCountries = [
        {Entity : 'Argentina', Year: 1900, Data: 51, Latitude: 37, Longitude: 67, Area: 1073000},
        {Entity : 'Bolivia', Year: 1900, Data: 18, Latitude: 16, Longitude: 63, Area: 424000},
        {Entity : 'Afghanistan', Year: 1979, Data: 20, Latitude: 33, Longitude: 67, Area: 249000}
      ];
      component.createGlobe();
    });

    it('should call the addCoordinatePoint function 2 times', () => {
      spyOn(component, 'addCoordinatePoint');
      component.setAllPoints(1900);
      fixture.detectChanges();
      expect(component.addCoordinatePoint).toHaveBeenCalledTimes(2);
    });

    /*Test specific countries are included for a given year*/
    it('should include Afghanistan for given year', () => {
      component.setAllPoints(1900);
      fixture.detectChanges();
      expect(component.globe.children).toBeTruthy();
      expect(component.globe.children[1].userData.Country).toEqual('Bolivia');
    });

    /*Slider can go to years with no data, for these years, test that coordinate points on the globe not created*/
    it('should not call the addCoordinatePoint function', () => {
      spyOn(component, 'addCoordinatePoint');
      component.setAllPoints(1948);
      fixture.detectChanges();
      expect(component.addCoordinatePoint).not.toHaveBeenCalled();
    });
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
    expect(popup_name).toContain('Country', 'Afghanistan');
    expect(popup_rate).toContain('Literacy Rate', '20');
    expect(popup_name).toBeTruthy;
    expect(popup_rate).toBeTruthy;
  });

  /*Check if not set to flex*/
  it('should not receive country data from component', () =>{
    component.displayType = "none";
    component.countryName = null;
    component.literacyRate = null;
    fixture.detectChanges();
    const popup_name = html.query(
      By.css('#displayCountryName')
      ).nativeElement.textContent;
    const popup_rate = html.query(
      By.css('#displayLiteracyRate')
      ).nativeElement.textContent;
    expect(popup_name).toContain('Country');
    expect(popup_rate).toContain('Literacy Rate');
    expect(popup_name).toBeFalsy;
    expect(popup_rate).toBeFalsy;
  });

  /*Test if we get the expected data from the data service using dummy data*/
  /*Adapted from https://codehandbook.org/how-to-unit-test-angular-component-with-service/*/
  it('should get Country[] response', fakeAsync(() =>{
    const service = fixture.debugElement.injector.get(DataService);
    spyOn(service, "getCountryData").and.callFake(() => {
      return Rx.of([{Entity : 'Afghanistan', Year: 1979, Data: 20, Latitude: 33, Longitude: 67, Area: 249000}]).pipe(delay(100));
    });
    component.ngOnInit();
    tick(100);
    expect(component.listOfCountries[0].Entity).toEqual('Afghanistan');
    expect(component.listOfCountries[0].Year).toEqual(1979);
  }));

});
