import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from "./cart.component";
import {RouterLink} from "@angular/router";
import {CartRoutingModule} from "./cart-routing.module";
import {ToastModule} from "primeng/toast";
import {FileUploadModule} from "primeng/fileupload";
import {ToolbarModule} from "primeng/toolbar";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {TabMenuModule} from "primeng/tabmenu";

import {ConfirmationService, MessageService} from "primeng/api";
import {UserProductsService} from "../service/user-products.service";
import {ProductComponent} from "../product/product.component";
import {CheckboxModule} from "primeng/checkbox";

@NgModule({
    declarations: [CartComponent],
    imports: [
        CommonModule,
        RouterLink,
        CartRoutingModule,
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
        CheckboxModule
    ],
    bootstrap: [ProductComponent],
    providers: [UserProductsService, MessageService, ConfirmationService]
})
export class CartModule {
}
