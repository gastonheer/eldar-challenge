import { Action, createReducer, on } from '@ngrx/store';
import * as DataActions from './data.actions';

export const dataFeatureKey = 'dataFeatureKey';

export interface DataState {
    list: [],
    error: any,
    loading: boolean,
}

export const initialState: DataState = {
    list: [],
    error: null,
    loading: false
}

const reducer = createReducer(
    initialState,
    on(DataActions.getData, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(DataActions.getDataSuccess, (state, { list }) => ({
        ...state,
        loading: false,
        list: list,
        error: null,
    })),
    on(DataActions.getDataFailed, (state, { error }) => ({
        ...state,
        loading: false,
        error: error
    })),
    on(DataActions.clearState, (state) => ({
        ...state,
        loading: false,
        error: null,
        list: state.list
    })),
);

export function dataReducer(state: DataState | undefined, action: Action): DataState {
    return reducer(state ?? initialState, action);
}