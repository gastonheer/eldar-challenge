import { Component, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../common/data.service';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'edit-data-modal',
    templateUrl: 'edit-data-modal.component.html',
    styleUrl: 'edit-data-modal.component.css'
})

export class EditDataModalComponent implements OnInit {
    @Input() visible!: boolean;
    @Input() modalData: any;

    @Output() closeModal = new EventEmitter<boolean>();

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
        console.log(this.modalData);
        let data = {
            title: this.formGroup.controls['description'].value,
            body: this.formGroup.controls['resumen'].value,
            userId: this.modalData.product.userId
        }
        if (this.modalData.type) {
            this.dataService.createPost(data);
        } else {
            this.dataService.updatePost(this.modalData.product.id, data);
        }
        this.cancel();
    }
    
    public cancel() {
        this.visible = false;
        this.closeModal.emit(this.visible);
    }
}