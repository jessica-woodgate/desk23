import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './models/country';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = 'http://localhost:3000/countries/getCountries';

  constructor(private httpClient: HttpClient) { }

  getCountryData() : Observable<Country[]>{

    return this.httpClient.get<Country[]>(this.REST_API_SERVER);
      
  }

  public getAll(){
    //return this.httpClient.get(this.REST_API_SERVER);

    /* return [
      {
        Entity: "Afghanistan",
        Year: 2015,
        Data: 18.157681,
        Latitude: 33.93911,
        Longitude: 67.709953,
        Area: 647500
      }, 
      {
        Entity: "Albania",
        Year: 2015,
        Data: 343,
        Latitude: 41.153332,
        Longitude: 20.168331,
        Area: 33
      },
      {
        Entity: "Argentina",
        Year: 2015,
        Data: 51.299999,
        Latitude: -38.416097,
        Longitude: -63.616672,
        Area: 34245
      },
    ]; */
  }
}
