import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { UserModel } from '../../common/models/userModel';

export const authFeatureKey = 'authFeatureKey';

export interface AuthState {
    user: UserModel | null;
    loading: boolean;
    error: any;
    isAuthenticated: boolean;
    users: UserModel[];
}

export const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
    isAuthenticated: false,
    users: []
}

const reducer = createReducer(
    initialState,
    on(AuthActions.logIn, (state) => ({
        ...state,
        user: null,
        isAuthenticated: false,
        loading: true,
        error: null,
    })),
    on(AuthActions.logInSuccess, (state, { user }) => ({
        ...state,
        user: user,
        isAuthenticated: true,
        loading: false,
        error: null,
    })),
    on(AuthActions.logInFailed, (state, { error }) => ({
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: error,
    })),
    on(AuthActions.clearState, 
       AuthActions.logOut, state => ({
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    })),
    on(AuthActions.signUp, (state, { user }) => ({
        ...state,
        user: null,
        error: null,
        users: [/* ...state.users,  */user]
    })),
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
    return reducer(state ?? initialState, action);
}