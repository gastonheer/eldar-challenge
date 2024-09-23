import { createAction, props } from "@ngrx/store";

export const clearState = createAction(
    '[Data Component] Clear State!'
);

export const getData = createAction(
    '[Data Component] Get Data!'
);

export const getDataSuccess = createAction(
    '[Data Component] Get Data Success!',
    props<{ list: [] }>()
);

export const getDataFailed = createAction(
    '[Data Component] Get Data Failed!',
    props<{ error: string }>()
);