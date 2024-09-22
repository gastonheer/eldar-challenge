import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../common/models/userModel';
import { NavigationPages } from '../../common/navigationPages';
import { Router } from '@angular/router';
import { DataService } from '../../common/data.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css'
})

export class HomeComponent implements OnInit {

    public currentUser!: UserModel;
    public items: any[] = []
    public optionMenu: boolean = false;
    public list: any[] = [];

    constructor(
        private router: Router,
        private dataService: DataService,
    ) { }

    ngOnInit(): void {
        let items = {
            icon: 'pi pi-power-off',
            label: 'Cerrar sesión',
            action: 'logout'
        }
        this.items.push(items);
        this.getCurrentUser();
        this.getData();
    }

    public getCurrentUser() {
        const user = localStorage.getItem('loggedUser');
        this.currentUser = user ? JSON.parse(user) : null;
    }

    public getData() {
        this.dataService.getPosts().subscribe(data => {
            this.list = data;
        })
    }

    public seeOptions() {
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