import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {RouterLink} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RouterLink,
    ButtonModule,
    DividerModule,
    InputTextModule,
    FormsModule,
  ]
})
export class LoginModule { }
