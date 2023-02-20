import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {ShoppingComponent} from "./shopping.component";

@NgModule({
  imports:
      [RouterModule.forChild([
        {path: '', component: ShoppingComponent}
      ])],
})
export class ShoppingRoutingModule { }
