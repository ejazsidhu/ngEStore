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
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';


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
    SharedModule,
    PublicRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule


  ]
})
export class PublicModule { }
