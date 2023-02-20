import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {CartComponent} from "./cart.component";


@NgModule({
    imports:
        [RouterModule.forChild([
            {path: '', component: CartComponent}
        ])],
})
export class CartRoutingModule {
}
