import { createReducer, on } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";
import { groceryAction } from "../actions/grocery.action";

// const initialState:Grocery[] = [
//     {"id":1,"name":"apple","type":"fruit"},
//     {"id":2,"name":"banana","type":"fruit"},
//     {"id":3,"name":"lays chips","type":"snacks"},
//     {"id":4,"name":"doritos","type":"snacks"}
// ]

const initialState:Grocery[] = []

export const groceryReducer = createReducer(initialState,
    on(groceryAction.loadGrocerySuccess, (state,action) => action.payload),
    on(groceryAction.loadGroceryFailure, (state,action) => [])
);
