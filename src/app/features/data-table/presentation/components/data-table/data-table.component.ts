import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../../../../common/models/userModel';
import { Store } from '@ngrx/store';
import { DataActions, DataReducers, DataSelectors } from '../../../ngrx/data.index';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'data-table',
    templateUrl: 'data-table.component.html',
    styleUrl: 'data-table.component.css'
})

export class DataTableComponent implements OnInit {

    @Input() currentUser!: UserModel | null;
    public list!: any[];
    public _list!: any[];
    public modalData: any;
    public showModal: boolean = false;
    public loading: boolean = true;
    public error!: string;

    public subscriptions: Subscription[] = [];

    constructor(
        private dataStore: Store<DataReducers.DataState>,
        private messageService: MessageService,
    ) { }

    ngOnInit(): void {
        this.dataStore.dispatch(DataActions.getData());
        this.dataSubscription();
    }

    public dataSubscription() {
        const subscription = this.dataStore.select(DataSelectors.selectFeature).subscribe(state => {
            this.loading = state.loading;
            if (state.error) {
                this.error = 'Se produjo un error obteniendo el listado';
            }
            if (state.list) {
                this.list = state.list;
                this._list = this.list.slice(0, 3);
            }
            setTimeout(() => {
                this.loading = false; // Simulo tiempo de carga
            }, 1000 * 0.3);
        });
        this.subscriptions.push(subscription);
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

    public showToast(props: any) {
        this.messageService.add(props);
    }

}