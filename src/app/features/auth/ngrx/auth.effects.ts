import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from './auth.index'
import { catchError, map, mergeMap, of } from "rxjs";
import { AuthenticationService } from "../auth.service";
import { NavigationPages } from "../../common/navigationPages";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffect {
    constructor(
        private actions$: Actions,
        private authService: AuthenticationService,
        private router: Router,
    ) { }

    public logIn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.logIn),
            mergeMap(({ user, pass }) => {
                return this.authService.logIn(user, pass).pipe(
                    map((user) => {
                        this.router.navigateByUrl(NavigationPages.HOME);
                        return AuthActions.logInSuccess({ user: user });
                    })
                )
            }), catchError((error: any) => {
                return of(AuthActions.logInFailed({ error: error }));
            })
        )
    )
}