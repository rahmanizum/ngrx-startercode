import { createActionGroup, emptyProps, props } from "@ngrx/store"
import { Grocery } from "../../../models/grocery.model"

// export const initGroceries = createAction('[Grocery] Load Groceries')

// export  const completeGrocery = createAction('[Grocery] Load Grocery success')

export const  groceryAction =createActionGroup({
    source:'Grocery API',
    events:{
        'Load Groceries':emptyProps(),
        'Load Grocery Success': props<{payload:Grocery[]}>(),
        'Load Grocery Failure':emptyProps()
    }
}
)