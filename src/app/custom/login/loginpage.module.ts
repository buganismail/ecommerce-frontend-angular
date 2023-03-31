import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginpageComponent} from "./loginpage.component";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginpageRoutingModule} from "./loginpage-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {PasswordModule} from "primeng/password";


@NgModule({
    declarations: [LoginpageComponent],
    imports: [
        CommonModule,
        ButtonModule,
        LoginpageRoutingModule,
        RouterLink,
        InputTextModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        PasswordModule
    ]
})
export class LoginpageModule {
}
