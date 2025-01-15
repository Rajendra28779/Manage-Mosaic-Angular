import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeonamesService {
  private overpassUrl = 'https://overpass-api.de/api/interpreter';

  constructor(private http: HttpClient) {}

  getCitiesInIndia(): Observable<any> {
    const query = `
      [out:json];
      area["name"="India"][boundary="administrative"];
      node[place="city"](area);
      out;
    `;
    return this.http.get<any>(`${this.overpassUrl}?data=${encodeURIComponent(query)}`);
  }
}
