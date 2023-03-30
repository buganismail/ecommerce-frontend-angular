import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthServiceService} from "../login/auth/auth-service.service";
import {AuthService} from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    // constructor(
    //     private router: Router,
    //     private authService: AuthServiceService
    // ) {
    // }

    // canActivate(
    //     route: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot
    // ):
    //     | boolean
    //     | UrlTree
    //     | Observable<boolean | UrlTree>
    //     | Promise<boolean | UrlTree> {
    //
    //     if (!this.authService.isAuthenticated()) {
    //         this.router.navigate(['login']);
    //         return false;
    //     }
    //     return true;
    // }


    constructor(private auth: AuthService, private router: Router) {
    }

    canActivate() {
        if (this.auth.IsLoggedIn()) {
            return true;
        }
        alert("You have not logged In")
        this.router.navigate(['login']);
        return false;
    }
}
