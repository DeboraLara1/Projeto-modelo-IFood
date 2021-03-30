import { Injectable, Pipe } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Restaurante } from './restaurante.model';
import { MEAT_API } from 'app/app.api';
import { ErrorHandler } from './../../app.error-handler';


@Injectable()
export class RestaurantesService {

    constructor(private http: Http) { }

    restaurantes(): Observable<Restaurante[]> {
        return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    // pegando restaurante selecionado por meio do id
    restaurantById(id: string): Observable<Restaurante> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`).map(response => response.json())
            .catch(ErrorHandler.handleError)
    }
}