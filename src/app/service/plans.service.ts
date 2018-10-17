import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Plans } from '../model/plans';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = "http://localhost:7071/plans"
    //this.baseUrl1 ="http://localhost:7071/customer"
  }
  getBaseUrlById(id: number): string {
    return this.baseUrl + "/" + id;

  }
  getSearchUrl(field: string, value: string): string {
    return this.baseUrl + "/" + field + "/" + value;

  }
  getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }

  getAllPlans(): Observable<Plans[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data.json())
    );
  }

  searchEmployees(field: string, value: string): Observable<Plans[]> {
    return this.http.get(this.getSearchUrl(field, value)).pipe
      (map(data => data.json())
      );
  }

  getEmployeeById(id: number): Observable<Plans> {
    return this.http.get(this.getBaseUrlById(id)).pipe(
      map(data => data.json())
    );
  }

}
