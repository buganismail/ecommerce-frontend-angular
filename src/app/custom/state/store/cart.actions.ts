import {createAction, props} from "@ngrx/store";
import {CartModel} from "../../model/cart.model";

export  const changeCartNumber = createAction('[Cart Component] changeCartNumber', props<{ payload: CartModel }>());