import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AdminPanelComponent} from "./admin-panel.component";

@NgModule({
    imports:
        [RouterModule.forChild([
            {path: '', component: AdminPanelComponent}
        ])],
})
export class AdminPanelRoutingModule {
}
