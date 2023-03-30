import {Product} from "../../demo/api/product";
import {UserModel} from "./user-model";

export interface BasketModel{
    basket_id?: number;
    product?: Product;
    user?: UserModel;

}
