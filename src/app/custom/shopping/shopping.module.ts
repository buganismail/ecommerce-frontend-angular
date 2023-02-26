import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingComponent} from "./shopping.component";
import {ShoppingRoutingModule} from "./shopping-routing.module";
import {RouterLink} from "@angular/router";
import {NavbarComponent} from "../layouts/navbar/navbar.component";
import {TableModule} from "primeng/table";
import {ToolbarModule} from "primeng/toolbar";
import {ToastModule} from "primeng/toast";
import {FileUploadModule} from "primeng/fileupload";
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {TabMenuModule} from "primeng/tabmenu";
import {HttpClientModule} from "@angular/common/http";
import {ProductsComponent} from "../products/products.component";
import {UserProductsService} from "../service/user-products.service";
import {ConfirmationService, MessageService} from "primeng/api";


@NgModule({
    declarations: [ShoppingComponent, NavbarComponent],
    imports: [
        CommonModule,
        ShoppingRoutingModule,
        RouterLink,
        TableModule,
        ToolbarModule,
        ToastModule,
        FileUploadModule,
        RippleModule,

        ButtonModule,
        RatingModule,
        FormsModule,
        DialogModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        ConfirmDialogModule,
        InputTextModule,
        InputTextareaModule,
        TabMenuModule,
        HttpClientModule
    ],
    bootstrap: [ShoppingComponent],
    exports: [
        NavbarComponent
    ],
    providers: [UserProductsService, MessageService, ConfirmationService]
})
export class ShoppingModule {
}
