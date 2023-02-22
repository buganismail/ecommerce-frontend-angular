import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Basket} from "../../demo/api/basket";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class BasketService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    public getBaskets(): Observable<Basket[]> {
        return this.http.get<Basket[]>(`${this.apiServerUrl}/basket/all`);
    }

    public addBasket(basket: Basket): Observable<Basket> {
        return this.http.post<Basket>(`${this.apiServerUrl}/basket/add`, basket);
    }

    public updateBasket(basket: Basket): Observable<Basket> {
        return this.http.put<Basket>(`${this.apiServerUrl}/basket/update`, basket);
    }

    public deleteBasket(basketId: number): Observable<Basket> {
        return this.http.delete<Basket>(`${this.apiServerUrl}/basket/delete/${basketId}`);
    }
}