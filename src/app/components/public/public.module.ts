import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductDetialComponent } from './product-detial/product-detial.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PublicRootComponent } from './public-root/public-root.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetialComponent,
    CartComponent,
    CheckoutComponent,
    PublicRootComponent,],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
