import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailComponent} from "./product-detail.component";
import {ProductDetailRoutingModule} from "./product-detail-routing.module";
import {RouterLink} from "@angular/router";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {CommentsModule} from "../comments/comments.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [ProductDetailComponent],
    imports: [
        CommonModule,
        ProductDetailRoutingModule,
        RouterLink,
        ToolbarModule,
        ButtonModule,
        RippleModule,
        SharedModule,
        CommentsModule,
        HttpClientModule,

    ]
})
export class ProductDetailModule {
}
