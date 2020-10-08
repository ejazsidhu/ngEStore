import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cart$ = new BehaviorSubject<[]>([]);
  cartData = this.cart$.asObservable();


  updateCart(item) {
    this.cart$.next(item);
  }
}
