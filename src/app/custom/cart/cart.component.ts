import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Data} from "../model/data";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserProductsService} from "../service/user-products.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Product} from "../../demo/api/product";
import {HttpErrorResponse} from "@angular/common/http";
import {BasketService} from "../service/basket.service";
import {Basket} from "../../demo/api/basket";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['cart.component.css']
})
export class CartComponent implements OnInit {

    showSuccess!: any;
    cartTotal!: Data[];
    price: number = 0;
    productDialog!: boolean;

    products!: Basket[];
    baskets!: Basket[];
    shopProducts: Data[] = [];

    product!: Data;

    selectedProducts!: Data;

    submitted!: boolean;

    statuses?: any[];

    formValue !: FormGroup;
    productModelObj: Data = new Data();

    constructor(
        private router: Router,
        private productService: UserProductsService,
        private basketService: BasketService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private formbuilder: FormBuilder) {
    }

    ngOnInit() {
        this.getBaskets();
        // this.products = JSON.parse(localStorage.getItem('PRODUCS'));
    }

    public getBaskets(): void {
        this.basketService.getBaskets().subscribe(
            (response: Basket[]) => {
                this.products = response;
                console.log(response)
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    editProduct(product: Data) {
        this.product = {...product};
        this.productDialog = true;

    }

    deleteProduct(product: Data) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter(val => val.product.product_id !== product.id);
                this.product = {} as Data;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Product Deleted',
                    life: 3000
                });
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    // saveProduct(product: Data) {
    //     this.submitted = true;
    //
    //     if (true) {
    //         if (this.product.id) {
    //             this.messageService.add({
    //                 severity: 'success',
    //                 summary: 'Successful',
    //                 detail: 'Product Added to Cart',
    //                 life: 3000
    //             });
    //
    //
    //         } else {
    //             this.product.image = 'product-placeholder.svg';
    //             this.products.push(this.product.id);
    //             this.messageService.add({
    //                 severity: 'success',
    //                 summary: 'Successful',
    //                 detail: 'Product Created',
    //                 life: 3000
    //             });
    //         }
    //
    //         this.shopProducts.push(product);
    //
    //         localStorage.setItem("Products", JSON.stringify(this.shopProducts));
    //
    //
    //         this.products = [...this.products];
    //         this.productDialog = false;
    //         this.product = {} as Data;
    //     }
    // }

}


/*
* constructor(private auth: AuthService) {
}

ngOnInit(): void {
    this.CartDetails();
    this.loadCart();
}

getCartDetails: any = [];

CartDetails() {
    if (localStorage.getItem('localCard')) {
        // @ts-ignore
        this.getCartDetails = JSON.parse(localStorage.getItem('localCard'));
    }
}

incQnt({prodId, qnt}: { prodId: any, qnt: any }) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
        if (this.getCartDetails[i].id === prodId) {
            if (qnt != 5)
                this.getCartDetails[i].amount = parseInt(qnt) + 1;
        }
    }
    localStorage.setItem('localCard', JSON.stringify(this.getCartDetails));
    this.loadCart();
}

decQnt({prodId, qnt}: { prodId: any, qnt: any }) {
    for (let i = 0; i < this.getCartDetails.length; i++) {
        if (this.getCartDetails[i].id === prodId) {
            if (qnt != 1)
                this.getCartDetails[i].amount = parseInt(qnt) - 1;
        }
    }
    localStorage.setItem('localCard', JSON.stringify(this.getCartDetails));
    this.loadCart();
}

total: number = 0;

loadCart() {
    if
    (localStorage.getItem('localCard')) {
        // @ts-ignore
        this.getCartDetails = JSON.parse(localStorage.getItem('localCard'));
        this.total = this.getCartDetails.reduce(function (acc: any, val: any) {
            return acc + (val.price * val.amount);
        }, 0);
    }
}

removeall() {
    localStorage.removeItem
    ('localCard');
    this.getCartDetails = [];
    this.total = 0;
    this.cartNumber = 0;
    this.auth.cartSubject.next
    (this.cartNumber);
}

singleDelete(getCartDetail: number) {
    console.log(getCartDetail);
    if (localStorage.getItem('localCard')) {
        // @ts-ignore
        this.getCartDetails = JSON.parse(localStorage.getItem('localCard'));
        for (let i = 0; i < this.getCartDetails.length; i++) {
            if (this.getCartDetails[i].id === getCartDetail) {
                this.getCartDetails.splice(i, 1);
                localStorage.setItem('localCard', JSON.stringify(this.getCartDetails));
                this.loadCart();
                this.cartNumberFunc();
            }
        }
    }
}

cartNumber: number = 0;

cartNumberFunc() {
    // @ts-ignore
    var cartValue = JSON.parse(localStorage.getItem('localCard'));
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next
    (this.cartNumber);
}
*/