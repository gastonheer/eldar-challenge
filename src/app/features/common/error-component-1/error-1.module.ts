import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Error1Component } from './error-1.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [Error1Component],
    declarations: [Error1Component],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Error1Module { }