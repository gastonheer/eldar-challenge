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
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { EditDataModalComponent } from './features/home/components/edit-data-modal/edit-data-modal.component';
import { DataTableComponent } from './features/home/components/data-table/data-table.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SkeletonModule } from 'primeng/skeleton';
import { HomeBarComponent } from './features/home/components/home-bar/home-bar.component';
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        EditDataModalComponent,
        DataTableComponent,
        HomeBarComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        ButtonModule,
        ProgressSpinnerModule,
        SkeletonModule,
        CardModule, 
        SpeedDialModule,
        PasswordModule,
        InputGroupModule,
        ConfirmDialogModule,
        SplitButtonModule,
        InputGroupAddonModule,
        PaginatorModule,
        DialogModule,
        TableModule,
        ReactiveFormsModule,
        Error1Module
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }