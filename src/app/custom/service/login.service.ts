import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginInterface, LoginInterfaceResponse} from "../model/loginInterface";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {UserModel} from "../model/user-model";

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private httpClient: HttpClient) {
    }

    public getLogin(): Observable<LoginInterface[]> {
        return this.httpClient.get<LoginInterface[]>(`${this.apiServerUrl}/user/all`);
    }

    public addLogin(register: UserModel) {
        return this.httpClient.post<LoginInterfaceResponse>(`${this.apiServerUrl}/user/add`, register)
    }

    public setLogin(login: UserModel){
        return this.httpClient.post<UserModel[]>(`${this.apiServerUrl}/user/login`, login);
    }

    public updateLogin(login: LoginInterface): Observable<LoginInterface> {
        return this.httpClient.put<LoginInterface>(`${this.apiServerUrl}/user/update`, login);
    }

    public deleteLogin(loginId: number): Observable<LoginInterface> {
        return this.httpClient.delete<LoginInterface>(`${this.apiServerUrl}/user/delete/${loginId}`);
    }

    //     public getProductById(productId: number): Observable<Product["product_id"]> {

//         return this.httpClient.get<Product["product_id"]>(`${this.apiServerUrl}/product/find/${productId}`);
//     }

    loginUser(user: UserModel): Observable<object> {
        console.log("Login Service : loginUser = ",user);
        return this.httpClient.post<object>(`${this.apiServerUrl}/user/add`, user);
    }
}
