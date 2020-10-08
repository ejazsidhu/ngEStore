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
  serverIp = 'https://re.rtdtradetracker.com';
  serach: ''


  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productList = (data as any).default;
    // console.log(this.productList)
    this.showProduct();

  }
  showProduct() {
    this.productService.getProduct()
      .subscribe((data) => {
        this.productList = data
      });
  }

}
