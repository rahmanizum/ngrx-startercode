import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";

// export const selectGroceries = (state:{groceries:Grocery[]}) => state.groceries
export const selectGroceries = createFeatureSelector<Grocery[]>('groceries')

// export const selectGroceriesByType = createSelector(selectGroceries,(groceries:Grocery[],type:string) => {
//     return groceries.filter(groc => groc.type === type)
// })

// export const selectGroceriesByType = createSelector(
//     selectGroceries,
//     (groceries: Grocery[], props: { type: string }) => {
//       return groceries.filter(groc => groc.type === props.type);
//     }
//   );

  export const selectGroceriesByType = (type: string) =>
    createSelector(selectGroceries, (groceries: Grocery[]) => {
      return groceries.filter(groc => groc.type === type);
    });
  
  