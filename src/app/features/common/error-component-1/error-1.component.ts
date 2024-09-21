import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'error-1',
    templateUrl: 'error-1.component.html',
    styleUrl: 'error-1.component.css'
})

export class Error1Component implements OnInit {
    @Input() error!: string;

    constructor() { }

    ngOnInit() { }
}