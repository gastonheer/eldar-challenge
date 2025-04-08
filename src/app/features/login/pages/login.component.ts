import { AuthActions, AuthReducers } from '../../auth/ngrx/auth.index';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { NavigationPages } from '../../common/navigationPages';
import { AuthSelectors } from '../../auth/ngrx/auth.index';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrl: 'login.component.css'
})

export class LoginComponent implements OnInit {

    public formGroup!: FormGroup;
    public error!: string;
    public subscriptions: Subscription[] = [];

    constructor(
        private authStore: Store<AuthReducers.AuthState>,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.authStore.dispatch(AuthActions.clearState());
        this.createForm();
        this.authSuscription();
        this.formGroup.valueChanges.subscribe(changes => {
            if (changes) this.error = '';
        })
    }

    public createForm() {
        this.formGroup = new FormGroup({
            username: new FormControl('', Validators.compose([Validators.required])),
            pass: new FormControl('', Validators.compose([Validators.required, Validators.minLength(7)]))
        })
    }

    public authSuscription() {
        const subscription = this.authStore.select(AuthSelectors.selectFeature).subscribe((state) => {
            if (state.error) {
                this.error = state.error;
            }
        });
        this.subscriptions.push(subscription);
    }

    public login() {
        this.authStore.dispatch(AuthActions.clearState());
        this.authStore.dispatch(AuthActions.logIn({
            user: this.formGroup.controls['username'].value,
            pass: this.formGroup.controls['pass'].value
        }));
    }

    public signUp() {
        this.router.navigate([NavigationPages.SIGNUP]);
    }

}