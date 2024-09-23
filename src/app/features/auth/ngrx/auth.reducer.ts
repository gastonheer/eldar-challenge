import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { UserModel } from '../../common/models/userModel';

export const authFeatureKey = 'authFeatureKey';

export interface AuthState {
    user: UserModel | null;
    loading: boolean;
}

export const initialState: AuthState = {
    user: null,
    loading: false,
}

const reducer = createReducer(
    initialState,
    on(AuthActions.logIn, (state) => ({
        ...state,
        loading: true
    })),
    on(AuthActions.logInSuccess, (state, { user }) => ({
        ...state,
        user: user,
        isAuthenticated: true,
        loading: false,
    })),
    on(AuthActions.logOut, state => ({
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false
    }))
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
    return reducer(state ?? initialState, action);
}