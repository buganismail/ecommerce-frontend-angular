import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate() {
        if (this.authService.IsLoggedIn()) {
            return true;
        }
        alert("You have not logged In")
        this.router.navigate(['login']);
        return false;
    }
}
