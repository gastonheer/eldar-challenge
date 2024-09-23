import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { DataEffect } from "./ngrx/data.effects";
import * as dataReducer from './ngrx/data.reducer'
import { CommonModule } from "@angular/common";

// Prime NG modules
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
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

import { HomeComponent } from "./pages/home.component";
import { DataService } from "../common/data.service";
import { DataTableComponent } from "./components/data-table/data-table.component";
import { HomeBarComponent } from "./components/home-bar/home-bar.component";
import { EditDataModalComponent } from "./components/edit-data-modal/edit-data-modal.component";
import { Error1Module } from "../common/error-component-1/error-1.module";

@NgModule({
    declarations: [
        HomeComponent,
        DataTableComponent,
        EditDataModalComponent,
        HomeBarComponent,
    ],
    imports: [
    StoreModule.forFeature(dataReducer.dataFeatureKey, dataReducer.dataReducer),
    EffectsModule.forFeature([DataEffect]),
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    ProgressSpinnerModule,
    CardModule,
    SpeedDialModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    ProgressSpinnerModule,
    SkeletonModule,
    ToastModule,
    ConfirmDialogModule,
    SplitButtonModule,
    PaginatorModule,
    DialogModule,
    TableModule,
    FormsModule,
    Error1Module
],
    providers: [
        DataService
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }