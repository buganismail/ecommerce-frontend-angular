import {Component, OnInit} from '@angular/core';
import {UserProductsService} from "../service/user-products.service";
import {Data} from "../model/data";
import {Store} from "@ngrx/store";
import {CartModel} from "../model/cart.model";
import {Product} from "../../demo/api/product";
import {BasketService} from "../service/basket.service";
import {ProductService} from "../service/product.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";
import {Basket} from "../../demo/api/basket";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-shopping',
    templateUrl: './shopping.component.html',
})
export class ShoppingComponent implements OnInit {

    productDialog!: boolean;

    public products!: Product[];
    shopProducts: Data[] = [];

    basket!: Basket;

    public baskets!: Basket[];

    product!: Data;

    selectedProducts!: Data;

    submitted!: boolean;

    stok: number = 1;

    cardItem: number = 0;
    cartNumber: number = 0;

    itemsCard: any = [];

    constructor(
        private store: Store,
        private basketService: BasketService,
        private productService: ProductService,
        private userProductService: UserProductsService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private formbuilder: FormBuilder,
        private authService: AuthService
    ) {
    }

    ngOnInit() {
        // this.userProductService.getProducts().then(data => this.products = data);
        this.getProducts();

        this.cardItemFunc();
    }

    public getProducts(): void {
        this.productService.getProducts().subscribe(
            (response: Product[]) => {
                this.products = response;
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    inc(product: Data) {
        // @ts-ignore
        if (product.amount < product.stok) {
            // @ts-ignore
            product.amount += 1;
        } else {
            alert("For this product store amount : " + product.stok)
        }
    }

    dec(product: Data) {
        // @ts-ignore
        if (product.amount > 1) {
            // @ts-ignore
            product.amount -= 1;
        }
    }


    showDetail(product: Data) {
        this.product = {...product};
        this.productDialog = true;
    }

    cardItemFunc() {
        if (localStorage.getItem('localCart') != null) {
            // @ts-ignore
            var cardCount = JSON.parse(localStorage.getItem('localCart'))
            this.cardItem = cardCount.length;
        }
    }

    addCart(product: Data) {
        let cartModel = new CartModel();
        cartModel.product = product;
        cartModel.quantity = 1;

        this.store.dispatch({"type": "[Carts] Add Count", "cart": cartModel})
    }

    addToCard(product: Product) {
        this.submitted = true;


        this.basketService.addBasket(product)

    }


    shopAdd(product: Data) {
        this.shopProducts.push(product);
        localStorage.setItem("PRODUCS", JSON.stringify(this.shopProducts));
        this.productDialog = false;
    }


    cartNumberFunc() {
        // @ts-ignore
        var cartValue = JSON.parse(localStorage.getItem('localCart'))
        this.cartNumber = cartValue.length
        this.authService.cartSubject.next(this.cartNumber)
    }

    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.baskets.length; i++) {
            if (this.baskets[i].basket_id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    editProduct(basket: Basket) {
        this.basket = {...basket};
        this.productDialog = true;
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

}
