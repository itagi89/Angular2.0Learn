import { NgModule }      from '@angular/core';
import { CustomerComponent } from '../Components/CustomerComponent';
import { FormsModule } from "@angular/forms";
import { GridComponent } from '../Components/GridComponent';
import { RouterModule } from '@angular/router';
import { CustomerRoutes } from '../Routing/CustomerRouting';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common'

@NgModule({
    imports: [
        RouterModule.forChild(CustomerRoutes),
                ReactiveFormsModule,
                HttpModule,
                CommonModule,
                FormsModule],
    declarations: [CustomerComponent,
                   GridComponent
    ],
    bootstrap: [CustomerComponent]
})
export class CustomerModule { }
