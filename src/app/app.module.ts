import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// APP modules
import { LoginModule } from './features/login/pages/login.module';
import { Error1Module } from "./features/common/error-component-1/error-1.module";

// Prime NG modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { HomeModule } from './features/home/home.module';
import { reducers } from './features/app/ngrx/reducers';
import { metaReducers, rehydrateState } from './features/app/ngrx/metaReducers';
import { AutoFocusModule } from 'primeng/autofocus';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        ButtonModule,
        ProgressSpinnerModule,
        SkeletonModule,
        ToastModule,
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
        FormsModule,
        Error1Module,
        LoginModule,
        HomeModule,
        AutoFocusModule,
        StoreModule.forRoot(reducers, { metaReducers, initialState: rehydrateState() }),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: !isDevMode(),
            features: {
                persist: true,
            }
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }