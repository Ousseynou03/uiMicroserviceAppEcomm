import { Injectable } from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import {Products} from "../model/products.interface";
import {ProductsService} from "../service/products.service";


@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<Products[]> {

  constructor(private productService : ProductsService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Products[]> {
    return this.productService.getAllProducts();
  }
}
