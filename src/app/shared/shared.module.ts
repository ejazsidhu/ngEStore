import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBannerComponent } from '../components/layout/top-banner/top-banner.component';
import { NavbarComponent } from '../components/layout/navbar/navbar.component';
import { MainSliderComponent } from '../components/layout/main-slider/main-slider.component';
import { BottomSliderComponent } from '../components/layout/bottom-slider/bottom-slider.component';
import { FooterComponent } from '../components/layout/footer/footer.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TopBannerComponent,
    NavbarComponent,
    MainSliderComponent,
    BottomSliderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
  ],
  exports: [
    TopBannerComponent,
    NavbarComponent,
    MainSliderComponent,
    BottomSliderComponent,
    FooterComponent,
    RouterModule,

    NgxPaginationModule]
})
export class SharedModule { }
