import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../common/models/userModel';
import { AuthActions, AuthReducers } from '../../../auth/ngrx/auth.index';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { NavigationPages } from '../../../common/navigationPages';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrl: 'register.component.css'
})

export class RegisterComponent implements OnInit {

    public formGroup!: FormGroup;
    public roles!: any[];

    constructor(
        private authService: AuthenticationService,
        private authStore: Store<AuthReducers.AuthState>,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.createForm();
        this.roles = this.authService.getRoles();
    }

    public createForm() {
        this.formGroup = new FormGroup({
            username: new FormControl('', Validators.compose([Validators.required])),
            pass: new FormControl('', Validators.compose([Validators.required, Validators.minLength(7)])),
            /* passConfirmation: new FormControl('', Validators.compose([Validators.required, Validators.minLength(7)])), */
            role: new FormControl('', Validators.compose([Validators.required])),
        })
    }

    public signUp() {
        let user: UserModel = {
            username: this.formGroup.controls['username'].value,
            role: this.formGroup.controls['role'].value.label,
            password: this.formGroup.controls['pass'].value,
            isAdmin: this.formGroup.controls['role'].value.label == this.roles[0].label,
            permissions: this.formGroup.controls['role'].value.label == this.roles[0].label ? this.authService.getPermissions() : []
        }
        this.authStore.dispatch(AuthActions.signUp({ user: user }));
        this.router.navigate([NavigationPages.LOGIN]);
        //this.authService.signUp(user);
    }

    goToLogin() {
        this.router.navigate([NavigationPages.LOGIN]);
    }
}