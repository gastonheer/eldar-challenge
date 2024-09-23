import { createFeatureSelector } from "@ngrx/store";
import { authFeatureKey, AuthState } from "./auth.reducer";



export const selectFeature = createFeatureSelector<AuthState>(authFeatureKey);