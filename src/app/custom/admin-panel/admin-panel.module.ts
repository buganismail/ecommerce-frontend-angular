import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AdminPanelComponent} from "./admin-panel.component";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AdminPanelRoutingModule} from "./admin-panel-routing.module";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";
import {TableModule} from "primeng/table";
import {RatingModule} from "primeng/rating";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ConfirmationService, MessageService} from "primeng/api";
import {UserProductsService} from "../service/user-products.service";
import {TabMenuModule} from "primeng/tabmenu";


@NgModule({
    declarations: [AdminPanelComponent],
    imports: [
        CommonModule,
        RouterLink,
        AdminPanelRoutingModule,
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
        TabMenuModule
    ],
    bootstrap: [AdminPanelComponent],
    providers: [UserProductsService, MessageService, ConfirmationService]
})
export class AdminPanelModule {
}
