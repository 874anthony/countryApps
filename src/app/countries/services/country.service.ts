import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CountryResponse } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  get getParams() {
    return new HttpParams().set('fields', 'name,capital,population,flags,cca2');
  }

  searchCountry(countryField: string): Observable<CountryResponse[]> {
    const url = `${this._apiURL}/name/${countryField}`;
    return this.httpClient.get<CountryResponse[]>(url, {
      params: this.getParams,
    });
  }

  searchByCapital(capital: string): Observable<CountryResponse[]> {
    const url = `${this._apiURL}/capital/${capital}`;
    return this.httpClient.get<CountryResponse[]>(url, {
      params: this.getParams,
    });
  }

  getCountryByCode(alphaCode: string): Observable<CountryResponse> {
    const url = `${this._apiURL}/alpha?codes=${alphaCode}`;
    return this.httpClient.get<CountryResponse>(url, {
      params: this.getParams,
    });
  }

  searchRegion(region: string): Observable<CountryResponse[]> {
    const url = `${this._apiURL}/region/${region}`;
    return this.httpClient.get<CountryResponse[]>(url, {
      params: this.getParams,
    });
  }
}
