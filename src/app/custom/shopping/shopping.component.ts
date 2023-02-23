import {Component, OnInit} from '@angular/core';
import {UserProductsService} from "../service/user-products.service";
import {Data} from "../model/data";
import {Store} from "@ngrx/store";
import {CartModel} from "../model/cart.model";

@Component({
    selector: 'app-shopping',
    templateUrl: './shopping.component.html',
})
export class ShoppingComponent implements OnInit {

    products!: Data[];

    constructor(private userProductService: UserProductsService, private store: Store) {
    }

    ngOnInit() {
        this.userProductService.getProducts().then(data => this.products = data);
    }

    addCart(product: Data) {
        let cartModel = new CartModel();
        cartModel.product = product;
        cartModel.quantity = 1;

        this.store.dispatch({"type": "[Carts] Add Count", "cart": cartModel})
    }

}
