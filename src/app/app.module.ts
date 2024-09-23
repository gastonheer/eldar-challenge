import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

// ngrx
import { metaReducers, rehydrateState } from './features/app/ngrx/metaReducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './features/app/ngrx/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// APP modules
import { Error1Module } from "./features/common/error-component-1/error-1.module";
import { LoginModule } from './features/login/pages/login.module';
import { HomeModule } from './features/home/home.module';

// Prime NG modules
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputGroupModule } from 'primeng/inputgroup';
import { SpeedDialModule } from 'primeng/speeddial';
import { PaginatorModule } from 'primeng/paginator';
import { AutoFocusModule } from 'primeng/autofocus';
import { PasswordModule } from 'primeng/password';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

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