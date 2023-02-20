import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Data} from "../model/data";
import {map} from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})
export class UserProductsService {

    products: any[] = [];

    constructor(private http: HttpClient) {
    }

    getProducts() {
        return this.http.get<any>('assets/custom/data/datasproduct.json')
            .toPromise()
            .then(res => res.data as Data[])
            .then(data => data);
    }

    getAllProducts() {
        return this.http.get('assets/custom/data/datasproduct.json');
    }

    getProduct() {
        return this.products;
    }

    saveCart(): void {
        localStorage.setItem('cart_items', JSON.stringify(this.products));
    }

    addToCart(addedProduct: any) {
        this.products.push(addedProduct);
        this.saveCart();
    }

    loadCart(): void {
        this.products = JSON.parse(localStorage.getItem('cart_items') as any) || [];
    }

    productInCart(product: any): boolean {
        return this.products.findIndex((x: any) => x.id === product.id) > -1;
    }

    removeProduct(product: any) {
        const index = this.products.findIndex((x: any) => x.id === product.id);

        if (index > -1) {
            this.products.splice(index, 1);
            this.saveCart();
        }
    }

    clearProducts() {
        localStorage.clear();
    }


    postProduct(data: any) {
        return this.http.post<any>("http://localhost:3000/posts", data)
            .pipe(map((res: any) => {
                return res;
            }))
    }

    getProduct2() {
        return this.http.get<any>("http://localhost:3000/posts")
            .pipe(map((res: any) => {
                return res;
            }))
    }

    updateProduct(data: any, id: number) {
        return this.http.put<any>("http://localhost:3000/posts" + id, data)
            .pipe(map((res: any) => {
                return res;
            }))
    }

    daleteProduct(id: number) {
        return this.http.delete<any>("http://localhost:3000/posts" + id)
            .pipe(map((res: any) => {
                return res;
            }))
    }


}
