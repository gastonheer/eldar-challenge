import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../common/models/userModel';
import { AuthenticationService } from '../../auth/auth.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css'
})

export class HomeComponent implements OnInit {

    public currentUser!: UserModel;

    constructor(
        private authService: AuthenticationService
    ) { }

    ngOnInit(): void {

        this.getCurrentUser();
    }

    public getCurrentUser() {
        this.currentUser = this.authService.getCurrentUser();
    }

}