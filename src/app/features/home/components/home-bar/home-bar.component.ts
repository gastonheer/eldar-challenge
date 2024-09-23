import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../../../common/models/userModel';
import { Router } from '@angular/router';
import { NavigationPages } from '../../../common/navigationPages';
import { AuthenticationService } from '../../../auth/auth.service';
import { Store } from '@ngrx/store';
import { AuthActions, AuthReducers } from '../../../auth/ngrx/auth.index';

@Component({
    selector: 'home-bar',
    templateUrl: 'home-bar.component.html',
    styleUrl: 'home-bar.component.css'
})

export class HomeBarComponent implements OnInit {
    @Input() currentUser!: UserModel | null;
    public userActions!: any[];
    public optionMenu: boolean = false;

    constructor(
        private router: Router,
        private authService: AuthenticationService,
        private store: Store<AuthReducers.AuthState>,
    ) { }

    ngOnInit() {
        this.userActions = this.authService.getUserActions();
    }

    public seeOptions() {
        this.optionMenu = !this.optionMenu;
    }

    public clickOption(option: { action: any; }): void {
        switch (option.action) {
            case 'logout':
                this.optionMenu = false;
                //this.authService.logOut();
                this.store.dispatch(AuthActions.logOut());
                this.router.navigateByUrl(NavigationPages.LOGIN);
                break;
        }
    }
}