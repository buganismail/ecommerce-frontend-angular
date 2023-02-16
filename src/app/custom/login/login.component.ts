import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    username: any;
    password: any;

    constructor(private router: Router) {
    }

    redirectUser(): void {
        if (this.username == "user" && this.password == "user") {
            this.router.navigate(['/products']);
        } else if (this.username == "admin" && this.password == "admin") {
            this.router.navigate(['/adminpanel']);
        } else {
            alert("Username veya şifre yanlış");
        }
    }
}

