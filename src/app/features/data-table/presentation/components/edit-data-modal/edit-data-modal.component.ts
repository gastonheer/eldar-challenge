import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../data.service';

@Component({
    selector: 'edit-data-modal',
    templateUrl: 'edit-data-modal.component.html',
    styleUrl: 'edit-data-modal.component.css'
})

export class EditDataModalComponent implements OnInit {
    @Input() visible!: boolean;
    @Input() modalData: any;

    @Output() closeModal = new EventEmitter<boolean>();
    @Output() toast = new EventEmitter<any>();

    public formGroup!: FormGroup;

    constructor(
        private dataService: DataService,
    ) { }

    ngOnInit(): void {
        this.createForm();
    }

    public createForm() {
        this.formGroup = new FormGroup({
            description: new FormControl('', Validators.required),
            resumen: new FormControl('', Validators.required)
        })
    }

    public save() {
        let data;
        if (this.modalData.type) {
            data = {
                title: this.formGroup.controls['description'].value,
                body: this.formGroup.controls['resumen'].value,
                userId: this.modalData.userId
            }
            this.createRegistry(data);
        } else {
            data = {
                title: this.formGroup.controls['description'].value,
                body: this.formGroup.controls['resumen'].value,
                userId: this.modalData.product.userId
            }
            this.updateRegistry(this.modalData.product.id, data);
        }
    }

    public createRegistry(data: any) {
        this.dataService.createPost(data).subscribe({
            next: (response) => {
                this.toast.emit({ severity: 'success', summary: 'Éxito', detail: 'Se agregó un nuevo registro.' })
                this.cancel();
            }, error: (error) => {
                this.toast.emit({ severity: 'error', summary: 'Error', detail: 'Ha ocurrido un error.' })
                this.cancel();
            }
        });
    }

    public updateRegistry(id: number, data: any) {
        this.dataService.updatePut(id, data).subscribe({
            next: (response) => {
                this.toast.emit({ severity: 'success', summary: 'Éxito', detail: 'Se modificó el registro.' })
                this.cancel();
            }, error: (error) => {
                this.toast.emit({ severity: 'error', summary: 'Error', detail: 'Ha ocurrido un error.' })
                this.cancel();
            }
        });
    }

    public cancel() {
        this.visible = false;
        this.closeModal.emit(this.visible);
    }
}