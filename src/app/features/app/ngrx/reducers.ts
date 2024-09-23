import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../../auth/ngrx/auth.reducer';
import * as fromData from '../../data-table/ngrx/data.reducer';

export interface AppState {
  auth: fromAuth.AuthState;
  data: fromData.DataState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  data: fromData.dataReducer,
};