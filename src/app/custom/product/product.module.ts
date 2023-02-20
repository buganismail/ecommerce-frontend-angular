import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from "./product.component";
import {ProductRoutingModule} from "./product-routing.module";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [ProductComponent],
    imports: [
        CommonModule,
        ProductRoutingModule,
        RouterLink,
        FormsModule
    ]
})
export class ProductModule {
}
