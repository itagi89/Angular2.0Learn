"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const CustomerComponent_1 = require("../Components/CustomerComponent");
const forms_1 = require("@angular/forms");
const GridComponent_1 = require("../Components/GridComponent");
const router_1 = require("@angular/router");
const CustomerRouting_1 = require("../Routing/CustomerRouting");
const forms_2 = require("@angular/forms");
const http_1 = require("@angular/http");
const common_1 = require("@angular/common");
let CustomerModule = class CustomerModule {
};
CustomerModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(CustomerRouting_1.CustomerRoutes),
            forms_2.ReactiveFormsModule,
            http_1.HttpModule,
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [CustomerComponent_1.CustomerComponent,
            GridComponent_1.GridComponent
        ],
        bootstrap: [CustomerComponent_1.CustomerComponent]
    })
], CustomerModule);
exports.CustomerModule = CustomerModule;
//# sourceMappingURL=CustomerModule.js.map