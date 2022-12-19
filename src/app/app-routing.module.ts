import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {ProductsResolver} from "./resolver/products.resolver";

const routes: Routes = [
  {path : '', component : ProductsComponent, resolve : {products : ProductsResolver}},
  {path : 'customers', component : CustomersComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
