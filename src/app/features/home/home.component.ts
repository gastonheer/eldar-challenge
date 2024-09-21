import { Component, OnInit } from '@angular/core';
import { UserModel } from '../common/models/userModel';
import { NavigationPages } from '../common/navigationPages';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css'
})

export class HomeComponent implements OnInit {
    public currentUser!: UserModel;
    public items: any[] = [];
    public optionMenu: boolean = false;
    constructor(
        private router: Router,
    ) { }

    ngOnInit(): void {
        const user = localStorage.getItem('loggedUser');
        this.currentUser = user ? JSON.parse(user) : null;
        let items = {
            icon: 'pi pi-power-off',
            label: 'Cerrar sesión',
            action: 'logout'
        }
        this.items.push(items);
    }

    seeOptions() {
        this.optionMenu = !this.optionMenu;
    }

    clickOption(item: { action: any; }): void {
        switch (item.action) {
            case 'logout':
                localStorage.removeItem('loggedUser');
                this.router.navigateByUrl(NavigationPages.LOGIN);
            break;

        }
    }
}