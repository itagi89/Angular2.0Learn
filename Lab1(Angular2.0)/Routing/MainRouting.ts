import { Component } from "@angular/core";
import { WelcomeComponent } from "../Components/WelcomeComponent"

export const MainRoutes = [
    { path: "", component: WelcomeComponent },
    { path: "UI/MasterAngular.html", component: WelcomeComponent },
    { path: "Customer", loadChildren: 'Modules/CustomerModule#CustomerModule' },
    { path: "Supplier", loadChildren: 'Modules/SupplierModule#SupplierModule' }
];