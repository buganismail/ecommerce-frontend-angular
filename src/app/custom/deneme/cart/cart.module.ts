import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CartComponent} from "./cart.component";
import {RouterLink} from "@angular/router";
import {CartRoutingModule} from "./cart-routing.module";

@NgModule({
    declarations: [CartComponent],
    imports: [
        CommonModule,
        RouterLink,
        CartRoutingModule
    ]
})
export class CartModule {
}
