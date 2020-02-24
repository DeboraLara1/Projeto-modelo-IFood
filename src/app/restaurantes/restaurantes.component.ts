import { Component, OnInit } from '@angular/core';

import { Restaurante } from './restaurante/restaurante.model';
import { RestaurantsService } from './restaurante/restaurants.service';



@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html'
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[] = []

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantes = this.restaurantsService.restaurants()
  }

}
