import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/public/products/products.component';
import { ProductDetialComponent } from './components/public/product-detial/product-detial.component';
import { CartComponent } from './components/public/cart/cart.component';
import { CheckoutComponent } from './components/public/checkout/checkout.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
