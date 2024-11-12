import { createAction, props } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";

export const addToBucket = createAction(
    '[Bucket] Add To Bucket',
    props<{payload:Bucket}>()
)

export const removeFromBucket = createAction(
    '[Bucket] Remove From Bucket',
    props<{payload:Partial<Bucket>}>()
)