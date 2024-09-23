import { ActionReducer, MetaReducer } from '@ngrx/store';
import { AuthActions } from '../../auth/ngrx/auth.index';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        const nextState = reducer(state, action);
        localStorage.setItem('appState', JSON.stringify(nextState));
        return nextState;
    };
}

export function rehydrateState(): any {
    const savedState = localStorage.getItem('appState');
    return savedState ? JSON.parse(savedState) : undefined;
}

/* export function clearStateMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        if (action.type === AuthActions.logInFailed.type || action.type === AuthActions.logOut.type) {
            state = undefined;
        }
        return reducer(state, action);
    };
} */

export const metaReducers: MetaReducer<any>[] = [localStorageSyncReducer];