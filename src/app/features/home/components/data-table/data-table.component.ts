import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../../../common/models/userModel';
import { DataService } from '../../../common/data.service';

@Component({
    selector: 'data-table',
    templateUrl: 'data-table.component.html',
    styleUrl: 'data-table.component.css'
})

export class DataTableComponent implements OnInit {

    @Input() currentUser!: UserModel;
    public list!: any[];
    public _list!: any[];
    public modalData: any;
    public showModal: boolean = false;
    public loading: boolean = false;
    public isAdmin!: boolean;

    constructor(
        private dataService: DataService,
    ) { }

    ngOnInit(): void {
        this.getData();
        this.isAdmin = this.currentUser.role == 'admin';
    }

    public getData() {
        this.loading = true;
        this.dataService.getPosts().subscribe(data => {
            this.list = data;
            this._list = this.list.slice(0, 5);
            this.loading = false;
        })
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