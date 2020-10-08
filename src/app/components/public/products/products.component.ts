import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
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
  search: '';
  page: number = 0;
  cart: any[] = [];
  dummayCart = [];


  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {

    // this.productList = (data as any).default;
    // console.log(this.productList)
    this.showProduct();

  }
  showProduct() {
    this.productService.getProduct()
      .subscribe((data) => {
        this.productList = data;
        this.productService.updateProductList(this.productList)
      });
  }

  errorImageCalled(event) {
    let url = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png";
    event.target.src = url;

  }

  addToCart(item) {


    console.log(this.cart);

    this.cart = [...this.cart, item.id];


    this.cartService.updateCart(this.cart);
    this.cartService.cartData.subscribe(data => {
      // console.log('updating data', data)
      // this.cart = [...data];
    })
  }

}
