import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {LoginpageComponent} from "./loginpage.component";


@NgModule({
    imports:
        [RouterModule.forChild([
            {path: '', component: LoginpageComponent}
        ])],
})
export class LoginpageRoutingModule {
}
