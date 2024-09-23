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
            this._list = this.list.slice(0, 3);
            setTimeout(() => {
                this.loading = false;
            }, 1000 * 0.3);
        })
    }

    public onPageChange(event?: any) {
        this.loading = true;
        setTimeout(() => {
            this._list = this.list.slice(event.page * 3, event.page * 3 + 3);
            this.loading = false;
        }, 1000 * 0.3);
    }

    public edit(product: any) {
        this.modalData = {
            header: 'Editar',
            product: product
        }
        this.showModal = true;
    }

    public add() {
        this.modalData = {
            header: 'Agregar registro',
            type: 'add',
        }
        this.showModal = true;
    }

    public closeModal(event: any) {
        this.showModal = event;
    }
}