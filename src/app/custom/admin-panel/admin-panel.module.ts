import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AdminPanelComponent} from "./admin-panel.component";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AdminPanelRoutingModule} from "./admin-panel-routing.module";


@NgModule({
    declarations: [AdminPanelComponent],
    imports: [
        CommonModule,
        RouterLink,
        AdminPanelRoutingModule
    ],
    bootstrap: [AdminPanelComponent],
})
export class AdminPanelModule {
}
