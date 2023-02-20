import {Component, OnInit} from '@angular/core';
import {UserProductsService} from "../service/user-products.service";
import {Data} from "../model/data";
import {ConfirmationService, MenuItem, MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";
import {ProductService} from "../service/product.service";
import {Product} from "../../demo/api/product";
import {HttpErrorResponse} from "@angular/common/http";

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

    product!: Data;

    selectedProducts!: Data;

    submitted!: boolean;

    stok: number = 1;

    cardItem: number = 0;
    cartNumber: number = 0;

    constructor(
        private productService: ProductService,
        private userProductService: UserProductsService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private formbuilder: FormBuilder,
        private authService: AuthService
    ) {
        this.authService.cartSubject.subscribe((data) => {
            this.cardItem = data;
        })
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

    itemsCard: any = [];

    showDetail(product: Data) {
        this.product = {...product};
        this.productDialog = true;
    }

    addToCard(category: Data) {
        let cartData = localStorage.getItem('localCart')
        if (cartData == null) {
            let storeData: any = [];
            storeData.push(category)
            localStorage.setItem('localCart', JSON.stringify(storeData))
        } else {
            var idCard = category.id;
            let index: number = -1;
            // @ts-ignore
            this.itemsCard = JSON.parse(localStorage.getItem('localCard'))
            for (let i = 0; i < this.itemsCard.length; i++) {
                // @ts-ignore
                if (parseInt(<string>idCard) === parseInt(this.itemsCard[i].id)) {
                    this.itemsCard[i].amount = category.amount
                    index = i
                    break;
                }
            }
            if (index == -1) {
                this.itemsCard.push(category)
                localStorage.setItem('localCart', JSON.stringify(this.itemsCard))
            } else {
                localStorage.setItem('localCart', JSON.stringify(this.itemsCard))
            }
        }

        this.cartNumberFunc();
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


    cartNumberFunc() {
        // @ts-ignore
        var cartValue = JSON.parse(localStorage.getItem('localCart'))
        this.cartNumber = cartValue.length
        this.authService.cartSubject.next(this.cartNumber)
    }


}
