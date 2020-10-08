import { Component, OnInit } from '@angular/core';
import * as data from "../products.json";
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any = [];
  ProductService;
  Product;
  

  constructor() { }

  ngOnInit(): void {

    this.productList = (data as any).default;
    console.log(this.productList)

  }
  showProduct() {
    this.ProductService.getProduct()
      .subscribe((data: ProductService) => this.ProductService = {
      });
  }

}
