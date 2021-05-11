import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  REST_API_SERVER = 'http://localhost:3000/countries/getCountries';
  
  constructor(private httpClient: HttpClient) { }

  getCountryData() : Observable<Country[]>{
    return this.httpClient.get<Country[]>(this.REST_API_SERVER);
  } 
}

