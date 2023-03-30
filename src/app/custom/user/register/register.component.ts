import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {AuthServiceService} from "../../login/auth/auth-service.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    email?: string;
    password?: string;
    firstname?: string;
    lastname?: string;

    private apiServerUrl = environment.apiBaseUrl;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private http: HttpClient,
        private authService: AuthServiceService
    ) {
    }

    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['./login']);
        }
    }

    onSubmit() {
        this.http.post<any>(`${this.apiServerUrl}/register`, {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password

        }).subscribe(data => {
            // Register başarılı oldu.
            alert("Account created. Redirecting to login page.");
            this.router.navigate(['login']);
        }, error => {
            alert("Please Fill In All The Blanks")
            // Register başarısız oldu.
        });
    }
}
