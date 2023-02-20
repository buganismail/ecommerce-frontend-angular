import {Component} from '@angular/core';
import {UserProductsService} from "../service/user-products.service";
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";
import {CartModel} from "../model/cart.model";
import {Data} from "../model/data";
import {Store} from "@ngrx/store";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
})
export class ProductComponent {
    product!: Data;
    submitted!: boolean;
    productDialog!: boolean;
    selectedProducts!: Data[];
    items!: MenuItem[];
    activeItem!: MenuItem;
    subTotal!: any;

    productList!: any[];
    products: any[] = [];

    constructor(
        private userProductService: UserProductsService,
        private product_service: UserProductsService,
        private router: Router,
        private store: Store
    ) {

    }

    ngOnInit() {
        this.userProductService.getProducts().then(data => this.products = data);

        this.items = [
            {label: 'Products', icon: 'pi pi-fw pi-home'},
            {label: 'Admin Panel', icon: 'pi pi-fw pi-pencil'},
            {label: 'Shop', icon: 'pi pi-fw pi-cog'},
        ];
        this.activeItem = this.items[0];
    }

    addToCart(product: any) {
        if (!this.product_service.productInCart(product)) {
            product.quantity = 1;
            this.product_service.addToCart(product);
            this.products = [...this.product_service.getProduct()];
            this.subTotal = product.price;
        }
    }

    openNew() {
        this.product = {}as Data;
        this.submitted = false;
        this.productDialog = true;
    }
    get total() {
        return this.products?.reduce(
            (sum, product) => ({
                quantity: 1,
                price: sum.price + product.quantity * product.price,
            }),
            { quantity: 1, price: 0 }
        ).price;
    }
    checkout() {
        localStorage.setItem('cart_total', JSON.stringify(this.total));
        this.router.navigate(['/cart']);
    }
    removeFromCart(product: any) {
        this.product_service.removeProduct(product);
        this.products = this.product_service.getProduct();
    }

    addCart(product: Data) {
        let cartModel = new CartModel();
        cartModel.product = product;
        cartModel.quantity = 1;

        this.store.dispatch({"type": "[Carts] Add Count", "cart": cartModel})


    }
}
