import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() {}
    IsLoggedIn(){
        return localStorage.getItem("User_id");
    }
    adminAuth(){
        if(localStorage.getItem("role")=="ADMIN")
            return true;

        return false;

    }
    userAuth(){
        if(localStorage.getItem("role")=="USER")
            return true;

        return false;

    }
}
