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
    styleUrls: ['/cart.component.css']
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

    selectedProducts!: Basket [];

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
            });
    }

    editProduct(product: Data) {
        this.product = {...product};
        this.productDialog = true;

    }

    public deleteBasket(basketId: number): void {
        this.basketService.deleteBasket(basketId).subscribe(
            (response: Basket) => {
                this.getBaskets();
            }
        );
        this.tikla();
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.selectedProducts != null;
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    tikla(){
        this.selectedProducts.forEach((value)=>{
            this.basketService.deleteBasket(value.basket_id).subscribe(
                (response:Basket) =>{
                    this.getBaskets();
                }
            )
        })

    }

}