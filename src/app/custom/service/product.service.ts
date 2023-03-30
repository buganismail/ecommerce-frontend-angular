import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../demo/api/product";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private httpClient: HttpClient) {
    }

    public getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(`${this.apiServerUrl}/product/all`);
    }

    public addProduct(product: Product): Observable<Product> {
        return this.httpClient.post<Product>(`${this.apiServerUrl}/product/add`, product);
    }

    public updateProduct(product: Product): Observable<Product> {
        return this.httpClient.put<Product>(`${this.apiServerUrl}/product/update`, product);
    }

    public deleteProduct(productId: number): Observable<Product> {
        return this.httpClient.delete<Product>(`${this.apiServerUrl}/product/delete/${productId}`);
    }

    public getProductById(productId: number): Observable<Product["product_id"]> {
        return this.httpClient.get<Product["product_id"]>(`${this.apiServerUrl}/product/find/${productId}`);
    }
}
