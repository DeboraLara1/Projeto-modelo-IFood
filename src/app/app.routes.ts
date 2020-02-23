import { Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { AbautComponent } from './abaut/abaut.component';
import { RestauranteComponent } from './restaurante/restaurante.component';





export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'abaut', component: AbautComponent },
    { path: 'restaurante', component: RestauranteComponent }



]