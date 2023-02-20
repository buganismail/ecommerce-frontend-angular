import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header.component";
import {RouterLink} from "@angular/router";
import {HeaderRoutingModule} from "./header-routing.module";


@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        RouterLink,
        HeaderRoutingModule
    ]
})
export class HeaderModule {
}
