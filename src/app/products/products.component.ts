import {Component, OnInit} from '@angular/core';
import {Products} from "../model/products.interface";
import {ProductsService} from "../service/products.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products! : Products[];
  constructor(private productService : ProductsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

}
