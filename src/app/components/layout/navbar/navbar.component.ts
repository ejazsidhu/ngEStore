import { Component, OnInit } from '@angular/core';
import { CartService } from '../../public/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cart: any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCartData();
  }
  getCartData() {
    this.cartService.cartData.subscribe((data: any) => {
      this.cart = data;
      this.cart = [...new Set(this.cart)]
      console.log("cart component", this.cart);
    })
  }

}
