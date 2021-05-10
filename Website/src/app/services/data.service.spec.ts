import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { Country } from '../models/country';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;
  let mockCountries: Country[];

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports: [HttpClientTestingModule],
       providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create data service', () => {
    expect(service).toBeTruthy();
  });

  /*Borrowed from https://www.thecodebuzz.com/angular-unit-test-and-mock-httpclient-get-request/*/
  it('should match countries with get request', () => {
    mockCountries = [
      {Entity : 'Afghanistan', Year: 1979, Data: 20, Latitude: 33, Longitude: 67, Area: 249000},
      {Entity : 'Armenia', Year: 1989, Data: 98, Latitude: 40, Longitude: 45, Area: 11000},
      {Entity : 'Azerbaijan', Year: 1999, Data: 98, Latitude: 40, Longitude: 47, Area: 33000}
    ];
    service.getCountryData().subscribe((countries) => {
      expect(countries.length).toEqual(3);
      expect(countries).toEqual(mockCountries);
    });
    const req = httpMock.expectOne('http://localhost:3000/countries/getCountries');
    expect(req.request.method).toEqual("GET");
    req.flush(mockCountries);
    httpMock.verify();
  });
});
