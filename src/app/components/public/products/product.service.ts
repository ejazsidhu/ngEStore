import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  ProductUrl = 'https://re.rtdtradetracker.com/pharma/product-list';

  getProduct() {
    return this.http.get(this.ProductUrl);
  }

  private products$ = new BehaviorSubject<[]>([]);
  productsData = this.products$.asObservable();


  updateProductList(item) {
    this.products$.next(item);
  }
}