import { Config } from './../../../../assets/config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  getProduct() {
    return this.http.get(Config.BASE_URI + Config.PRODUCT_LIST);
  }

  private products$ = new BehaviorSubject<[]>([]);
  productsData = this.products$.asObservable();


  updateProductList(item) {
    this.products$.next(item);
  }
}
