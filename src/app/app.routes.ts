import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AbautComponent } from './abaut/abaut.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { MenuComponent } from './detailhes-restaurantes/menu/menu.component';
import { ReviewsComponent } from './detailhes-restaurantes/reviews/reviews.component';
import { DetailhesRestaurantesComponent } from './detailhes-restaurantes/detailhes-restaurantes.component';



export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'abaut', component: AbautComponent },
    { path: 'restaurants', component: RestaurantesComponent },
    {
        path: 'restaurants/:id', component: DetailhesRestaurantesComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    // { path: 'order', loadChildren: './order/order.module#OrderModule' },
    // { path: 'order-summary', component: OrderSummaryComponent },
    // { path: 'about', loadChildren: './about/about.module#AboutModule' },
    // { path: '**', component: NotFoundComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }