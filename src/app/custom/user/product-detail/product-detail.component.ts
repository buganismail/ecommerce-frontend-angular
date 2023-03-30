import {Component, OnInit} from '@angular/core';
import {BasketService} from "../../service/basket.service";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../demo/api/product";
import {CartModel} from "../../model/cart.model";
import {Store} from "@ngrx/store";
import {CommentsService} from "../../service/comments.service";
import {BasketModel} from "../../model/basketModel";
import {AuthServiceService} from "../../login/auth/auth-service.service";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    cartCount$ = 0;
    carts$: CartModel[] = [];

    constructor(
        private store: Store<{ "carts": CartModel[] }>,
        private productService: ProductService,
        private basketService: BasketService,
        private route: ActivatedRoute,
        private commentsService: CommentsService,
        private router: Router,
        private authService: AuthServiceService
    ) {
        this.store.select("carts").subscribe(res => {
            this.cartCount$ = res.length;
            this.carts$ = res;
        })
    }

    submitted!: boolean;
    product!: Product;
    basket!: BasketModel;
    id: number = 0;
    public products!: Product[];


    ngOnInit() {
        this.route.params.subscribe(params => this.getProductDetailById(params['product_id']))
        this.getComments();
    }

    public getComments(): void {
        this.commentsService.getComments().subscribe(
            (response: any[]) => {
                console.log("getComments", response)
                this.products = response;
            }
        )
    }

    donustur() {
        let list: any[] = this.products;
        let recursivefunc2 = (list: any[], id = 0) => {
            let array: any[] = [];
            list.forEach(element => {
                if (element.parent_id === id) {
                    let children = recursivefunc2(list, element.id);

                    if (children.length) {
                        element.children = children;
                    } else {
                        element.children = [];
                    }
                    array.push(element);

                }
            })
            return array;

        }
        console.log("recursivefunc2(list)", recursivefunc2(list));
    }


    getProductDetailById(id: number) {
        this.productService.getProductById(id).subscribe((data: any) => this.product = data);
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
}
