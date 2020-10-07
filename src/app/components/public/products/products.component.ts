import { Component, OnInit } from '@angular/core';
import * as data from "../products.json"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any = [];

  constructor() { }

  ngOnInit(): void {
    
    this.productList = (data as any).default;
    console.log(this.productList)

  }

}
