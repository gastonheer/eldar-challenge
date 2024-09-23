import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AuthEffect } from "../../auth/ngrx/auth.effects";
import * as authReducer from '../../auth/ngrx/auth.reducer'

import { LoginComponent } from "./login.component";
import { AuthenticationService } from "../../auth/auth.service";
import { CommonModule } from "@angular/common";

// Prime NG modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SpeedDialModule } from 'primeng/speeddial';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        StoreModule.forFeature(authReducer.authFeatureKey, authReducer.authReducer),
        EffectsModule.forFeature([AuthEffect]),
        ReactiveFormsModule,
        CommonModule,
        ButtonModule,
        ProgressSpinnerModule,
        CardModule,
        SpeedDialModule,
        PasswordModule,
        InputGroupModule,
        InputGroupAddonModule,
    ],
    providers: [
        AuthenticationService
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }