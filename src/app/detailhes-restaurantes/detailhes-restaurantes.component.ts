import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurante } from 'app/restaurantes/restaurante/restaurante.model';
import { RestaurantesService } from 'app/restaurantes/restaurante/restaurantes.service';

@Component({
  selector: 'mt-detailhes-restaurantes',
  templateUrl: './detailhes-restaurantes.component.html'
})
export class DetailhesRestaurantesComponent implements OnInit {

  restaurant: Restaurante

  constructor(private restaurantsService: RestaurantesService,
    private route: ActivatedRoute, private activevatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    console.log('id restaurante', this.activevatedRoute.snapshot.params.id);
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}

