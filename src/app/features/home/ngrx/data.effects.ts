import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataActions } from './data.index'
import { catchError, map, mergeMap, of } from "rxjs";
import { DataService } from "../../common/data.service";

@Injectable()
export class DataEffect {
    constructor(
        private actions$: Actions,
        private dataService: DataService,
    ) { }

    public getData$ = createEffect(() =>
        this.actions$.pipe(
          ofType(DataActions.getData),
          mergeMap(() => {
            return this.dataService.getPosts().pipe(
              map((list) => {
                return DataActions.getDataSuccess({ list });
              }),
              catchError((error: any) => {
                return of(DataActions.getDataFailed({ error: error }));
              })
            );
          })
        )
      );
      
}