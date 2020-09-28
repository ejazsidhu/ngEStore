import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBannerComponent } from './components/layout/top-banner/top-banner.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { MainSliderComponent } from './components/layout/main-slider/main-slider.component';
import { BottomSliderComponent } from './components/layout/bottom-slider/bottom-slider.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    NavbarComponent,
    MainSliderComponent,
    BottomSliderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
