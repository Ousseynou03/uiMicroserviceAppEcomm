import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Products} from "../model/products.interface";
import {Customer} from "../model/customer.interface";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http : HttpClient) {}


  //http://localhost:8888/CUSTOMER-SERVICE/customers

  getAllCustomers():Observable<Customer[]> {
    return  this.http.get<any>("http://localhost:8888/CUSTOMER-SERVICE/customers").pipe(
      map(data => data._embedded.customers)
    );
  }
}
