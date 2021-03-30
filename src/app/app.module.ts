import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, } from '@angular/router';
import { ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AbautComponent } from './abaut/abaut.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestaurantesService } from './restaurantes/restaurante/restaurantes.service';
import { DetailhesRestaurantesComponent } from './detailhes-restaurantes/detailhes-restaurantes.component';
import { MenuComponent } from './detailhes-restaurantes/menu/menu.component';
import { MenuItemComponent } from './detailhes-restaurantes/menu-item/menu-item.component';
import { ReviewsComponent } from './detailhes-restaurantes/reviews/reviews.component';
import { ShoppingCartComponent } from './detailhes-restaurantes/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AbautComponent,
    RestaurantesComponent,
    RestauranteComponent,
    DetailhesRestaurantesComponent,
    MenuComponent,
    MenuItemComponent,
    ReviewsComponent,
    ShoppingCartComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [RestaurantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
