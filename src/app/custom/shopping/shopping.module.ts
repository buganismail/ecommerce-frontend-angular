import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingComponent} from "./shopping.component";
import {ShoppingRoutingModule} from "./shopping-routing.module";
import {RouterLink} from "@angular/router";
import {NavbarComponent} from "../layouts/navbar/navbar.component";


@NgModule({
    declarations: [ShoppingComponent, NavbarComponent],
    imports: [
        CommonModule,
        ShoppingRoutingModule,
        RouterLink,
    ]
})
export class ShoppingModule {
}
