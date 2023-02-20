import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {RouterLink} from "@angular/router";
import {HomeRoutingModule} from "./home-routing.module";


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterLink,
        HomeRoutingModule
    ]
})
export class HomeModule {
}
