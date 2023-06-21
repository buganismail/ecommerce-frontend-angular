import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Basket} from "../../demo/api/basket";
import {environment} from "../../../environments/environment";
import {Product} from "../../demo/api/product";
import {BasketModel} from "../model/basketModel";

@Injectable({
    providedIn: 'root'
})
export class BasketService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private httpClient: HttpClient) {
    }

    public getBaskets(user_id: number): Observable<Basket[]> {
        return this.httpClient.get<Basket[]>(`${this.apiServerUrl}/basket/all`);
    }

    public addBasket(basket: BasketModel): Observable<BasketModel> {
        console.log(basket);
        return this.httpClient.post<BasketModel>(`${this.apiServerUrl}/basket/add`, basket);
    }

    public updateBasket(basket: Basket): Observable<Basket> {
        return this.httpClient.put<Basket>(`${this.apiServerUrl}/basket/update`, basket);
    }

    public deleteBasket(basketId: number): Observable<Basket> {
        return this.httpClient.delete<Basket>(`${this.apiServerUrl}/basket/delete/${basketId}`);
    }
}
