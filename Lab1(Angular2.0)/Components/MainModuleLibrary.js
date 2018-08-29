"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const CustomerComponent_1 = require("./CustomerComponent");
const forms_1 = require("@angular/forms");
const GridComponent_1 = require("./GridComponent");
const MasterPageComponent_1 = require("./MasterPageComponent");
const SupplierComponent_1 = require("./SupplierComponent");
const router_1 = require("@angular/router");
const Routing_1 = require("./Routing");
const forms_2 = require("@angular/forms");
const http_1 = require("@angular/http");
let MainModuleLibrary = class MainModuleLibrary {
};
MainModuleLibrary = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(Routing_1.ApplicationRoutes),
            forms_2.ReactiveFormsModule,
            http_1.HttpModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [CustomerComponent_1.CustomerComponent,
            SupplierComponent_1.SupplierComponent,
            GridComponent_1.GridComponent,
            MasterPageComponent_1.MasterPageComponent
        ],
        bootstrap: [MasterPageComponent_1.MasterPageComponent]
    })
], MainModuleLibrary);
exports.MainModuleLibrary = MainModuleLibrary;
//# sourceMappingURL=MainModuleLibrary.js.map