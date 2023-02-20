import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppLayoutModule} from './layout/app.layout.module';
import {NotfoundComponent} from './demo/components/notfound/notfound.component';
import {CountryService} from './demo/service/country.service';
import {CustomerService} from './demo/service/customer.service';
import {EventService} from './demo/service/event.service';
import {IconService} from './demo/service/icon.service';
import {NodeService} from './demo/service/node.service';
import {PhotoService} from './demo/service/photo.service';
import {BrowserModule} from "@angular/platform-browser";
import {UserProductsService} from "./custom/service/user-products.service";
import {StoreModule} from '@ngrx/store';
import {CartReducers} from "./custom/state/store/cart.reducers";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputNumberModule} from "primeng/inputnumber";
import {DialogModule} from "primeng/dialog";
import {FileUploadModule} from "primeng/fileupload";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ProductService} from "./custom/service/product.service";

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        BrowserModule,
        StoreModule.forRoot({"carts": CartReducers}),
        ReactiveFormsModule,
        HttpClientModule,
        TableModule,
        ToolbarModule,
        ButtonModule,
        RippleModule,
        InputNumberModule,
        DialogModule,
        FileUploadModule,
        ToastModule,
        ConfirmDialogModule,
        FormsModule
    ],
    providers: [
        {provide: LocationStrategy, useClass: PathLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, UserProductsService, ProductService
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
