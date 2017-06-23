import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { SwiperComponent } from './swiper/swiper.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    SwiperComponent,
    ProductComponent,
    StarsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
