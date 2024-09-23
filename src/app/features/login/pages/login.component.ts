import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthActions, AuthReducers } from '../../auth/ngrx/auth.index';
import { Store } from '@ngrx/store';
import { AuthSelectors } from '../../auth/ngrx/auth.index';
import { Subscription } from 'rxjs';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrl: 'login.component.css'
})

export class LoginComponent implements OnInit {

    public formGroup!: FormGroup;
    public authError: boolean = false;
    public error: string = '';
    public subscriptions: Subscription[] = [];

    constructor(
        private authStore: Store<AuthReducers.AuthState>,
    ) { }

    ngOnInit(): void {
        this.createForm();
        this.authSuscription();
    }

    public createForm() {
        this.formGroup = new FormGroup({
            username: new FormControl('', Validators.compose([Validators.required])),
            pass: new FormControl('', Validators.compose([Validators.required, Validators.minLength(7)]))
        })
    }

    public authSuscription() {
        const subscription = this.authStore.select(AuthSelectors.selectFeature).subscribe((state) => {
            console.log(state)
        });
        this.subscriptions.push(subscription);
    }

    public login() {
        this.authStore.dispatch(AuthActions.logIn({
            user: this.formGroup.controls['username'].value,
            pass: this.formGroup.controls['pass'].value
        }));
    }

}