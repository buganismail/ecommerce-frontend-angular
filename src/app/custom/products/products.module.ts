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
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";

import {ConfirmationService, MessageService} from "primeng/api";
import {UserProductsService} from "../service/user-products.service";
import {HttpClientModule} from "@angular/common/http";
import {SearchComponent} from "../search/search.component";

@NgModule({
    declarations: [ProductsComponent, SearchComponent],
    imports: [
        CommonModule,
        RouterLink,
        ProductsRoutingModule,
        ButtonModule,
        ToastModule,
        ToolbarModule,
        FileUploadModule,
        TableModule,
        RatingModule,
        FormsModule,
        DialogModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        ConfirmDialogModule,
        RippleModule,
        InputTextModule,
        InputTextareaModule,
        TabMenuModule,
        HttpClientModule,
    ],
    bootstrap: [ProductsComponent],
    providers: [UserProductsService, MessageService, ConfirmationService],

    exports: [
        SearchComponent
    ]
})
export class ProductsModule {
}
