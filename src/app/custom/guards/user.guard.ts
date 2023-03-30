import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthServiceService} from "../login/auth/auth-service.service";
import {AuthService} from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class UserGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {
    }

    canActivate() {
        if (this.auth.userAuth())
            return true;
        this.router.navigate(['']);
        return false;
    }
}
