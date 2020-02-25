import { Injectable, Pipe } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Restaurante } from './restaurante.model';
import { MEAT_API } from 'app/app.api';

@Injectable()
export class RestaurantesService {

    constructor(private http: Http) { }

    restaurantes(): Observable<Restaurante[]> {
        return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())
    }
}