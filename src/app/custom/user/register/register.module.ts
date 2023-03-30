import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from "./register.component";
import {RegisterRoutingModule} from "./register-routing.module";
import {RouterLink} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {PasswordModule} from "primeng/password";


@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        RouterLink,
        InputTextModule,
        ReactiveFormsModule,
        ButtonModule,
        FormsModule,
        PasswordModule,
    ]
})
export class RegisterModule {
}
