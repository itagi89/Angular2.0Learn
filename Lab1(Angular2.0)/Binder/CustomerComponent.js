"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Customer_1 = require("../Model/Customer");
const FactoryCustomer_1 = require("../Service/FactoryCustomer");
const http_1 = require("@angular/http");
let CustomerComponent = class CustomerComponent {
    constructor(_factorycustomer, _http) {
        // binding logic
        this.currentCustomer = null;
        this.CustomerType = "Customer";
        this.http = null;
        this.factorycustomer = null;
        // customer collection
        this.customers = new Array();
        this.http = _http;
        this.factorycustomer = _factorycustomer;
        this.currentCustomer = this.factorycustomer.create(this.CustomerType);
    }
    onCustomerTypeChange(_TypeofCustomer) {
        this.CustomerType = _TypeofCustomer;
        this.currentCustomer = this.factorycustomer.create(this.CustomerType);
    }
    Submit() {
        debugger;
        //http://localhost:1045/api/Customer/post
        var custs = [];
        for (let entity of this.customers) {
            var cust = {};
            cust.CustomerName = entity.CustomerName;
            cust.CustomerCode = entity.CustomerCode;
            cust.CustomerAmount = entity.CustomerAmount;
            cust.CustomerType = entity.CustomerType;
            custs.push(cust);
        }
        let data = JSON.stringify(custs);
        //  let header = new Headers({ 'Content-Type': 'application/x-www-form-unlencoded' });
        //let option = new RequestOptions({ headers: header });
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let option = new http_1.RequestOptions({ headers: headers });
        var observable = this.http.post("http://localhost:1045/api/Customer/post", data, option);
        observable.subscribe(res => this.Success(res), res => this.Error(res));
    }
    Error(res) {
        debugger;
        console.log(res);
    }
    Success(res) {
        debugger;
        this.customers = res.json();
    }
    Select(custselected) {
        this.currentCustomer = this.factorycustomer.create(this.CustomerType);
        this.currentCustomer.CustomerAmount = custselected.CustomerAmount;
        this.currentCustomer.CustomerCode = custselected.CustomerCode;
        this.currentCustomer.CustomerName = custselected.CustomerName;
        this.currentCustomer.CustomerType = custselected.CustomerType;
        this.CustomerType = custselected.CustomerType;
    }
    Clear() {
        this.currentCustomer = new Customer_1.Customer();
    }
    Update() {
        for (let cust of this.customers) {
            if (cust.CustomerCode == this.currentCustomer.CustomerCode) {
                cust.CustomerName = this.currentCustomer.CustomerName;
                cust.CustomerAmount = this.currentCustomer.CustomerAmount;
            }
        }
        this.currentCustomer = new Customer_1.Customer();
    }
    Add() {
        this.customers.push(this.currentCustomer);
        // new fresh reference
        this.customers = this.customers.slice();
        this.currentCustomer = new Customer_1.Customer();
    }
};
CustomerComponent = __decorate([
    core_1.Component({
        providers: [FactoryCustomer_1.FactoryCustomer],
        templateUrl: "../UI/Customer.html"
    }),
    __metadata("design:paramtypes", [FactoryCustomer_1.FactoryCustomer, http_1.Http])
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=CustomerComponent.js.map