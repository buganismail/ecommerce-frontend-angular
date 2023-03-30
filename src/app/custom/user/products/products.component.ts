import {Component, OnInit} from '@angular/core';
import {Data} from "../../model/data";
import {ProductService} from "../../service/product.service";
import {Product} from "../../../demo/api/product";
import {HttpErrorResponse} from "@angular/common/http";
import {Basket} from "../../../demo/api/basket";
import {BasketService} from "../../service/basket.service";
import {CartModel} from "../../model/cart.model";
import {Store} from "@ngrx/store";
import {BasketModel} from "../../model/basketModel";
import {AuthServiceService} from "../../login/auth/auth-service.service";
import {Router, RouterLink} from "@angular/router";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styles: [`
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `],
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
    productDialog!: boolean;

    public products!: Product[];
    shopProducts: Data[] = [];

    basket!: BasketModel;

    public baskets!: Basket[];

    product!: Data;

    selectedProducts!: Data;

    submitted!: boolean;

    stok: number = 1;

    cardItem: number = 0;
    cartNumber: number = 0;

    itemsCard: any = [];

    searchText: string = '';

    cartCount$ = 0;
    carts$: CartModel[] = [];


    constructor(
        private store: Store<{ "carts": CartModel[] }>,
        private basketService: BasketService,
        private productService: ProductService,
        private authService: AuthServiceService,
        private router: Router
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
                // console.log("product response", response)
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


    addToCard(product: Product) {
        this.submitted = true;
        // @ts-ignore
        let user_id = Number(JSON.parse(localStorage.getItem('User_id')));
        let basket: BasketModel;
        basket = {

            product: product,
            user: {
                id: user_id
            }
        }
        this.basketService.addBasket(basket).subscribe(
            (response: BasketModel) => {

            }
        )
    }

    signout() {
        this.authService.logout();
        this.router.navigate(['./login']);
    }

    cardItemFunc() {
        if (localStorage.getItem('localCart') != null) {
            // @ts-ignore
            var cardCount = JSON.parse(localStorage.getItem('localCart'))
            this.cardItem = cardCount.length;
        }
    }

    shopAdd(product: Data) {
        this.shopProducts.push(product);
        localStorage.setItem("PRODUCS", JSON.stringify(this.shopProducts));
        this.productDialog = false;
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
        // this.basket = {...basket};
        this.productDialog = true;
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    onSearchTextEntered(searchValue: string) {
        this.searchText = searchValue;
    }

}
