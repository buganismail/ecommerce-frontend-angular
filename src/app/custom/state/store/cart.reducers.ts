import {createReducer, on} from "@ngrx/store";
import {changeCartNumber} from "./cart.actions";
import {Data} from "../../model/data";
import {CartModel} from "../../model/cart.model";

export const CartReducers = createReducer(
    [],
    on(changeCartNumber, (state, cart) => {
        return {
            ...state,
            basket: cart.payload,
        }
    })
)