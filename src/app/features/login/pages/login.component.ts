import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { NavigationPages } from '../../common/navigationPages';
@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrl: 'login.component.css'
})

export class LoginComponent implements OnInit {

    public formGroup!: FormGroup;
    public authError: boolean = false;
    public error: string = '';

    constructor(
        private authService: AuthenticationService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.createForm();
    }

    public createForm() {
        this.formGroup = new FormGroup({
            username: new FormControl('', Validators.compose([Validators.required])),
            pass: new FormControl('', Validators.compose([Validators.required, Validators.minLength(7)]))
        })
    }

    public login() {
        this.authService.logIn(this.formGroup.controls['username'].value, this.formGroup.controls['pass'].value).subscribe(foundUser => {
            if (foundUser) {
                this.authError = false;
                this.router.navigateByUrl(NavigationPages.HOME);
            } else {
                this.authError = true;
                this.error = "Alguno de los datos ingresados es incorrecto."
            }
        })
    }

}