import { createFeatureSelector } from "@ngrx/store";
import { dataFeatureKey, DataState } from "./data.reducer";

export const selectFeature = createFeatureSelector<DataState>(dataFeatureKey);