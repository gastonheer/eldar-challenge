import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { LoginComponent } from './features/login/pages/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Error1Module } from "./features/common/error-component-1/error-1.module";
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { HomeComponent } from './features/home/pages/home.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        ButtonModule,
        CardModule, 
        SpeedDialModule,
        PasswordModule,
        InputGroupModule,
        ConfirmDialogModule,
        SplitButtonModule,
        InputGroupAddonModule,
        ReactiveFormsModule,
        Error1Module
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }