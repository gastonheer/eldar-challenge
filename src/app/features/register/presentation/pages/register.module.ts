import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// PrimeNG
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { RegisterComponent } from "./register.component";
import { InputGroupModule } from 'primeng/inputgroup';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from "primeng/password";
import { CardModule } from 'primeng/card';
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserModule,

        // PrimeNG
        ButtonModule,
        CardModule,
        InputGroupModule,
        InputGroupAddonModule,
        ButtonModule,
        DropdownModule,
        PasswordModule,
    ],
    providers: [],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterModule { }