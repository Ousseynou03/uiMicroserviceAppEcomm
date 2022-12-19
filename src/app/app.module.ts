import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import {ProductsService} from "./service/products.service";
import {HttpClientModule} from "@angular/common/http";
import {ProductsResolver} from "./resolver/products.resolver";
import { BillingComponent } from './billing/billing.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [
    ProductsService,
    ProductsResolver

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
