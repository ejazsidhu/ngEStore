import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../products/product.service';
import * as data from "../products.json";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any = [];
  productList = [];
  cartDetail: any = [];

  constructor(private productService: ProductService, private cartService: CartService) {
    this.showProduct();
    this.getCartData();

  }

  ngOnInit(): void {


  }


  showProduct() {
    this.productService.productsData
      .subscribe((data: any) => {
        this.productList = data;
        // console.log("products in method", this.productList)
      });
  }
  getCartData() {
    this.cartService.cartData.subscribe((data: any) => {
      // this.cart = data;
      this.cart = this.itemCount(data)
      // console.log("cart component", this.itemCount(this.cart))
      this.cartDetail = this.itemCount(this.cart);
    })
  }

  itemCount(items: []) {

    let uItems: any = [];
    uItems = [...new Set(items)];
    // console.log(uItems);
    let u = []
    // console.log("products", this.productList)
    if (uItems.length > 0) {
      uItems.map(e => {
        let obj = {
          item: this.productList.filter(i => i.id == e)[0],
          quantity: this.cart.filter(id => id == e).length
        }
        u.push(obj);
      });
    }

    return u;
  }

}
