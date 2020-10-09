import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../products/product.service';
import * as data from "../products.json";
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: any = [];
  productList = [];
  cartDetail: any = [];
  serverIp = environment.serverIp
  count: any;
  updatedQuantity: any;

  constructor(private productService: ProductService, private cartService: CartService) {
    this.showProduct();
    this.getCartData();

  }
  errorImageCalled(event) {
    let url = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png";
    event.target.src = url;

  }

  removeFromCart(index, item) {
    console.log(index, item);

    this.cart.splice(index, 1);
    for (var i = this.count.length; i--;) {
      if (this.count[i] === item.id) {
        this.count.splice(i, 1);
      }
    }
    // console.log("count after remove item", this.count)
    this.cartService.updateCart(this.count)
  }

  showProduct() {
    this.productService.productsData
      .subscribe((data: any) => {
        this.productList = data;
        // console.log("products in method", this.productList)
      });
  }

  updateCart(event, index) {

    this.cart[index].quantity = this.updatedQuantity;


    // switch (action) {
    //   case 'remove-item':
    //     let i = this.count.findIndexOf(item.id);
    //     this.count.slice(i, 0)
    //     this.cartService.updateCart(this.count);
    //     break;

    //   default:
    //     break;
    // }

    // this.cartService.updateCart(cart);
  }
  getCartData() {
    this.cartService.cartData.subscribe((data: any) => {
      console.log(data);
      this.count = data;
      this.cart = this.itemCount(data)
      console.log("cart component", this.cart)

    })
  }

  getTotal(item, quantity) {
    return item.price * quantity;
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
          quantity: this.count.filter(id => id == e).length
        }
        u.push(obj);
      });
    }

    return u;
  }

}
