import {Product} from "./product";

export interface Basket {
    basket_id: number;
    product : Product;
    user: object;
}