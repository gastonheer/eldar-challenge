import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../common/models/userModel';
import { Store } from '@ngrx/store';
import { AuthReducers, AuthSelectors } from '../../../auth/ngrx/auth.index';
import { Subscription } from 'rxjs';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css'
})

export class HomeComponent implements OnInit {

    public currentUser!: UserModel | null;
    public subscriptions: Subscription[] = [];


    constructor(
        private store: Store<AuthReducers.AuthState>,
    ) { }

    ngOnInit(): void {
        this.authSubscription();
    }

    public authSubscription() {
        const subscription = this.store.select(AuthSelectors.selectFeature).subscribe(state => {
            this.currentUser = state.user;
        });
        this.subscriptions.push(subscription);
    }

}