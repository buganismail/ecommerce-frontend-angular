import {Product} from "./product";

export interface Comment {
    comment_id: number;
    product : Product;
    user: object;
    parent_id: number;
    text: string;

}