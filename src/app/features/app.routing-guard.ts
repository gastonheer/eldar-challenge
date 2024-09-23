import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { NavigationPages } from "./common/navigationPages";
import { select, Store } from "@ngrx/store";
import { AuthReducers, AuthSelectors } from "./auth/ngrx/auth.index";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HomeGuard implements CanActivate {
    constructor(
        private router: Router,
        private store: Store<AuthReducers.AuthState>
    ) { }

    canActivate():
        | Observable<boolean | UrlTree>
        | boolean {
        return this.store.pipe(
            select(AuthSelectors.selectFeature),
            map((state) => {
                if (state.user) return true;
                else {
                    this.router.navigate([NavigationPages.LOGIN]);
                    return false
                }

            })
        )
    }
}