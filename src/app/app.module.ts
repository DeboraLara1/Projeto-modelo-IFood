import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, } from '@angular/router';
import { ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AbautComponent } from './abaut/abaut.component';
import { RestauranteComponent } from './restaurante/restaurante.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AbautComponent,
    RestauranteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
