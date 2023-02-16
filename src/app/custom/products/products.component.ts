import {Component} from '@angular/core';
import {UserProductsService} from "../service/user-products.service";
import {Data} from "../model/data";
import {MenuItem} from "primeng/api";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
})
export class ProductsComponent {
    datasproducts!: Data[];


    items!: MenuItem[];

    activeItem!: MenuItem;

    constructor(private userProductService: UserProductsService) {
    }

    ngOnInit() {
        this.userProductService.getProducts().then(data => this.datasproducts = data);

        this.items = [
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ];
        this.activeItem = this.items[0];
    }
}
