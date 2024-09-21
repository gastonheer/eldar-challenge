import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "./auth/auth.service";
import { NavigationPages } from "./common/navigationPages";

@Injectable({
    providedIn: 'root'
})
export class HomeGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthenticationService,
    ) { }

    canActivate(): boolean {
        const isAuthenticated = !!this.authService.getCurrentUser();
        if (!isAuthenticated) {
            this.router.navigate([NavigationPages.LOGIN]);
            return false;
        }
        return true;
    }
}