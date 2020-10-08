import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartData();
  }
  getCartData() {
    this.cartService.cartData.subscribe((data: any) => {
      this.cart = data;
      console.log("cart component", this.cart);
    })
  }

}
