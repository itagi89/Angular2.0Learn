import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerComponent }   from './CustomerComponent';
import { FormsModule } from "@angular/forms";
import { GridComponent } from './GridComponent';
import { MasterPageComponent } from "./MasterPageComponent";
import { SupplierComponent } from "./SupplierComponent";
import { RouterModule } from '@angular/router';
import { ApplicationRoutes } from './Routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
    imports: [
                RouterModule.forRoot(ApplicationRoutes),
                ReactiveFormsModule,
                HttpModule,
                BrowserModule,
                FormsModule],
    declarations: [CustomerComponent,
                   SupplierComponent,
                   GridComponent,
                   MasterPageComponent
    ],
    bootstrap: [MasterPageComponent]
})
export class MainModuleLibrary { }
