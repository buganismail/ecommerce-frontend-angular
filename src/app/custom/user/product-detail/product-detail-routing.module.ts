import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {ProductDetailComponent} from "./product-detail.component";

@NgModule({
    imports:
        [RouterModule.forChild([
            {path: '', component: ProductDetailComponent}
        ])],
})
export class ProductDetailRoutingModule {
}
