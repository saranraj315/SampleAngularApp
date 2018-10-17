import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Customer } from '../model/customer';
import { map } from 'rxjs/operators';
import { Plans } from '../model/plans';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl ="http://localhost:7071/customer"
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

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get(this.getBaseUrlById(id)).pipe(
      map(data => data.json())
    );
  }

  addEmployee(employee: Plans): Observable<Plans> {
    return this.http.post(this.baseUrl, JSON.stringify(employee), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }
}


