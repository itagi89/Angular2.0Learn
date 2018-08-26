import { Component } from "@angular/core";
import { CustomerComponent } from "../Binder/CustomerComponent";
import { SupplierComponent } from "../Binder/SupplierComponent";

export const ApplicationRoutes = [
    { path: "Customer", component: CustomerComponent },
    { path: "Supplier", component: SupplierComponent }
];