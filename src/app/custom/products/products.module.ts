import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from "./products.component";
import {ProductsRoutingModule} from "./products-routing.module";
import {RouterLink} from "@angular/router";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {TabMenuModule} from "primeng/tabmenu";


@NgModule({
    declarations: [ProductsComponent],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        RouterLink,
        TableModule,
        ButtonModule,
        RatingModule,
        FormsModule,
        TabMenuModule
    ]
})
export class ProductsModule {
}
