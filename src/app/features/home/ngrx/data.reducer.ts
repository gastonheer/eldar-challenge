import { Action, createReducer, on } from '@ngrx/store';
import * as DataActions from './data.actions';

export const dataFeatureKey = 'dataFeatureKey';

export interface DataState {
    list: [],
    error: string,
    loading: boolean,
}

export const initialState: DataState = {
    list: [],
    error: '',
    loading: false
}

const reducer = createReducer(
    initialState,
    on(DataActions.getData, (state) => ({
        ...state,
        loading: true
    })),
    on(DataActions.getDataSuccess, (state, { list }) => ({
        ...state,
        loading: false,
        list: list
    })),
    on(DataActions.getDataFailed, (state, { error }) => ({
        ...state,
        loading: false,
        error: error
    })),
);

export function dataReducer(state: DataState | undefined, action: Action): DataState {
    return reducer(state ?? initialState, action);
}