import { ActionReducer, MetaReducer } from '@ngrx/store';

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

export const metaReducers: MetaReducer<any>[] = [localStorageSyncReducer];