import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    cartSubject = new Subject<any>();

    constructor(private http:HttpClient) {
    }
}
