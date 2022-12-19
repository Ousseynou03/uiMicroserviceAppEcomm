import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Products} from "../model/products.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) {}

  getAllProducts():Observable<Products[]> {
   return  this.http.get<any>("http://localhost:8888/INVENTORY-SERVICE/products").pipe(
     map(data => data._embedded.products)
   );
  }
}

