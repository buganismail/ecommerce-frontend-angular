import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Data} from "../model/data";


@Injectable({
    providedIn: 'root'
})
export class UserProductsService {

    constructor(private http: HttpClient) {
    }

    getProducts() {
        return this.http.get<any>('assets/custom/data/datasproduct.json')
            .toPromise()
            .then(res => res.data as Data[])
            .then(data => data);
    }

}
