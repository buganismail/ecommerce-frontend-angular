import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Data} from "../../model/data";
import {UserProductsService} from "../../service/user-products.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {Product} from "../../../demo/api/product";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductService} from "../../service/product.service";
import {CartModel} from "../../model/cart.model";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {AuthServiceService} from "../../login/auth/auth-service.service";

@Component({
    selector: 'app-admin-panel',
    templateUrl: './admin-panel.component.html',
    styles: [`
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `],
    styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {

    cartCount$ = 0;
    carts$: CartModel[] = [];
    productDialog!: boolean;

    public products!: Product[];

    product!: Product;

    selectedProducts!: Data[];

    submitted!: boolean;

    statuses?: any[];

    searchText: string = '';

    constructor(
        private store: Store<{ "carts": CartModel[] }>,
        private productService: ProductService,
        private userProductService: UserProductsService,
        private messageService: MessageService,
        private router: Router,
        private authService: AuthServiceService
    ) {
        this.store.select("carts").subscribe(res => {
            this.cartCount$ = res.length;
            this.carts$ = res;
        })
    }

    ngOnInit() {
        this.getProducts();
        this.statuses = [
            {label: 'INSTOCK', value: 'instock'},
            {label: 'LOWSTOCK', value: 'lowstock'},
            {label: 'OUTOFSTOCK', value: 'outofstock'}
        ];
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

    public deleteProduct(productId: number): void {
        this.productService.deleteProduct(productId).subscribe(
            (response: Product) => {
                this.getProducts();
            }
        );
    }

    public saveProduct(product: Product) {
        this.submitted = true;

        this.productService.addProduct(product).subscribe(
            (response: Product) => {
                if (true) {
                    if (this.product.product_id) {
                        this.products[this.findIndexById(this.product.product_id)] = this.product;
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Product Updated',
                            life: 3000
                        });
                    } else {
                        this.product.image = 'product-placeholder.svg';
                        this.products.push(product);
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Successful',
                            detail: 'Product Created',
                            life: 3000
                        });
                    }
                    this.products = [...this.products];
                    this.productDialog = false;
                }
                this.getProducts();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }

    openNew() {
        this.product = {} as Product;
        this.submitted = false;
        this.productDialog = true;
    }

    editProduct(product: Data) {
        this.product = {...product};
        this.productDialog = true;
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].product_id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onSearchTextEntered(searchValue: string) {
        this.searchText = searchValue;
    }

    signout() {
        this.authService.logout();
        this.router.navigate(['./login']);

    }
}
