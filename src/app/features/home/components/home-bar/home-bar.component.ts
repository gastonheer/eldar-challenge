import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../../../common/models/userModel';
import { Router } from '@angular/router';
import { NavigationPages } from '../../../common/navigationPages';
import { AuthenticationService } from '../../../auth/auth.service';

@Component({
    selector: 'home-bar',
    templateUrl: 'home-bar.component.html',
    styleUrl: 'home-bar.component.css'
})

export class HomeBarComponent implements OnInit {
    @Input() currentUser!: UserModel;
    public userActions!: any[];
    public optionMenu: boolean = false;

    constructor(
        private router: Router,
        private authService: AuthenticationService,
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
                localStorage.removeItem('loggedUser');
                this.router.navigateByUrl(NavigationPages.LOGIN);
                break;
        }
    }
}