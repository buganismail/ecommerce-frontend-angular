import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from "./auth/auth-service.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
    selector: 'app-loginpage',
    templateUrl: './loginpage.component.html',
    styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
    email?: string;
    password?: string;
    private apiServerUrl = environment.apiBaseUrl;


    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
    }

    onSubmit() {
        this.http.post<any>(`${this.apiServerUrl}/login`, {
            email: this.email, password: this.password

        }).subscribe(data => {
            // Login başarılı oldu. JWT token'ı burada data.token şeklinde alınabilir.
            console.log("data",data)
            localStorage.setItem('access_token', data.token);
            localStorage.setItem('role', data.role);
            localStorage.setItem('User_id', data.user_id);
            if (data.role === 'ADMIN') {
                this.router.navigate(['adminpanel']);
            } else if (data.role === 'USER') {
                this.router.navigate(['products']);
            } else
                console.log("Batladı.");
        }, error => {
            alert("Invalid Email or Password")
            // Login başarısız oldu.
        });
    }
}
