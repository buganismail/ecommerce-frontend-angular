import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailComponent} from "./product-detail.component";
import {ProductDetailRoutingModule} from "./product-detail-routing.module";
import {RouterLink} from "@angular/router";
import {ShoppingModule} from "../shopping/shopping.module";
import {CommentsModule} from "../comments/comments.module";


@NgModule({
    declarations: [ProductDetailComponent],
    imports: [
        CommonModule,
        ProductDetailRoutingModule,
        RouterLink,
        ShoppingModule,
        CommentsModule
    ]
})
export class ProductDetailModule {
}
