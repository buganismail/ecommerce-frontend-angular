import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CartModel} from "../../model/cart.model";
import {ProductService} from "../../service/product.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{


    cartCount$ = 0;
    carts$: CartModel[] = [];

    constructor(
        private store: Store<{ "carts": CartModel[] }>,
        private productService: ProductService
    ) {
        this.store.select("carts").subscribe(res => {
            this.cartCount$ = res.length;
            this.carts$ = res;
        })
    }
    ngOnInit() {
    }



}
