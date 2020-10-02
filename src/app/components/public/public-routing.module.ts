import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductDetialComponent } from './product-detial/product-detial.component';
import { ProductsComponent } from './products/products.component';
import { PublicRootComponent } from './public-root/public-root.component';

const routes: Routes = [
  {
    path: '', component: PublicRootComponent,
    children: [
      { path: '', component: ProductsComponent },
      // { path: '', redirectTo: 'porducts', pathMatch: 'full' },
      { path: 'products', component: ProductsComponent },
      { path: 'product/:id', component: ProductDetialComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: '**', redirectTo: 'porducts', pathMatch: 'full' },

    ]

  },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
