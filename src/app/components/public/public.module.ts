import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductDetialComponent } from './product-detial/product-detial.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PublicRootComponent } from './public-root/public-root.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetialComponent,
    CartComponent,
    CheckoutComponent,
    PublicRootComponent,
    AboutUsComponent,
    ContactUsComponent,],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
