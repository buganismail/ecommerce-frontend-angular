import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthServiceService} from "../login/auth/auth-service.service";
import {AuthService} from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private router: Router, private auth: AuthService) {
    }

    canActivate() {
        if (this.auth.adminAuth())
            return true;
        this.router.navigate(['']);
        return false;
    }
}
