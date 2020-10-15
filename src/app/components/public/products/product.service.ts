import { Config } from './../../../../assets/config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  serverIp = Config.BASE_URI;

  getProduct() {
    return this.http.get(this.serverIp + Config.PRODUCT_LIST);
  }

  private products$ = new BehaviorSubject<[]>([]);
  productsData = this.products$.asObservable();


  updateProductList(item) {
    this.products$.next(item);
  }
}
