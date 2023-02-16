import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from "./product.component";
import {ProductRoutingModule} from "./product-routing.module";
import {RouterLink} from "@angular/router";


@NgModule({
    declarations: [ProductComponent],
    imports: [
        CommonModule,
        ProductRoutingModule,
        RouterLink
    ]
})
export class ProductModule {
}
