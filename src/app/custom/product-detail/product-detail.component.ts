import {Component, OnInit} from '@angular/core';
import {BasketService} from "../service/basket.service";
import {ProductService} from "../service/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../demo/api/product";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    constructor(
        private productService: ProductService,
        private basketService: BasketService,
        private route: ActivatedRoute
    ) {
    }

    submitted!: boolean;
    product!: Product;
    id:number =0;

    ngOnInit() {
        this.route.params.subscribe(params => this.getProductDetailById(params['product_id']))
    }



    getProductDetailById(id: number) {
        this.productService.getProductById(id).subscribe((data: any) => this.product = data);
    }

    addToCard(product:Product) {

        this.submitted = true;

        this.basketService.addBasket(product)

    }

}
