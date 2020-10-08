import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  ProductUrl = './products/products.component';

  getProduct() {
    return this.http.get(this.ProductUrl);
}
}