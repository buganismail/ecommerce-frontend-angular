import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthServiceService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    login(email: string, password: string) {
        return this.http.post<any>(`${this.apiServerUrl}/login`, {email: email, password: password});
    }

    register(firstName: string, lastName: string, email: string, password: string) {
        return this.http.post<any>(`${this.apiServerUrl}/register`, {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password
        });
    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('User_id');
        localStorage.removeItem('role');
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('access_token');
        // token var mı ve dolu mu?
        if (token && token.length > 0) {
            // token varsa doğru kabul et
            return true;
        }
        // token yoksa yanlış kabul et
        return false;
    }


}
