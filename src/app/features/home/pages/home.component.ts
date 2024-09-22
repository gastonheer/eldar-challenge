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
    public _list!: any[];
    public isAdmin!: boolean;
    public showModal: boolean = false;
    public modalData: any;

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
        this.isAdmin = this.currentUser.role === 'admin';
    }

    public getData() {
        this.dataService.getPosts().subscribe(data => {
            this.list = data;
            this._list = this.list.slice(0, 5);
        })
    }

    public seeOptions() {
        this.optionMenu = !this.optionMenu;
    }

    public clickOption(item: { action: any; }): void {
        switch (item.action) {
            case 'logout':
                localStorage.removeItem('loggedUser');
                this.router.navigateByUrl(NavigationPages.LOGIN);
                break;
        }
    }

    public onPageChange(event?: any) {
        this._list = this.list.slice(event.page * 5, event.page * 5 + 5);
    }

    public edit(product: any) {
        this.modalData = {
            header: 'Editar',
            title: '',
            product: product
        }
        this.showModal = true;
    }

    public add() {
        this.modalData = {
            header: 'Agregar nuevo',
            title: '',
            type: 'add'
        }
        this.showModal = true;
    }

    public closeModal(event: any) {
        this.showModal = event;
    }

}