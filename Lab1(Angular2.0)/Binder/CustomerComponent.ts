import { Component } from "@angular/core";
import { Customer } from "../Model/Customer";
import { FactoryCustomer } from "../Service/FactoryCustomer";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';


@Component({
    providers: [FactoryCustomer],
    templateUrl: "../UI/Customer.html"
})
export class CustomerComponent {
    // binding logic
    currentCustomer: Customer = null;
    private CustomerType: string = "Customer";

    private http: Http = null;

    onCustomerTypeChange(_TypeofCustomer) {
        this.CustomerType = _TypeofCustomer;
        this.currentCustomer = this.factorycustomer.create(this.CustomerType);

    }
    factorycustomer: FactoryCustomer = null;
    constructor(_factorycustomer: FactoryCustomer, _http: Http) {
        this.http = _http;
        this.factorycustomer = _factorycustomer;
        this.currentCustomer = this.factorycustomer.create(this.CustomerType);

    }
    // customer collection
    customers: Array<Customer> = new Array<Customer>();
    Submit() {
        debugger;
        //http://localhost:1045/api/Customer/post
        var custs = [];
        for (let entity of  this.customers) {
            var cust: any = {};
            cust.CustomerName = entity.CustomerName;
            cust.CustomerCode = entity.CustomerCode;
            cust.CustomerAmount = entity.CustomerAmount;
            cust.CustomerType = entity.CustomerType;
            custs.push(cust);
        }
        let data = JSON.stringify(custs);
      //  let header = new Headers({ 'Content-Type': 'application/x-www-form-unlencoded' });
        //let option = new RequestOptions({ headers: header });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let option = new RequestOptions({ headers: headers });
        var observable = this.http.post("http://localhost:1045/api/Customer/post", data, option);
        observable.subscribe(res => this.Success(res),res => this.Error(res));
    }
    Error(res) {
        debugger;
        console.log(res);
    }
    Success(res) {
        debugger;
        this.customers = res.json();
    }

    Select(custselected: Customer) {
        this.currentCustomer = this.factorycustomer.create(this.CustomerType);
        this.currentCustomer.CustomerAmount = custselected.CustomerAmount;
        this.currentCustomer.CustomerCode = custselected.CustomerCode;
        this.currentCustomer.CustomerName = custselected.CustomerName;
        this.currentCustomer.CustomerType = custselected.CustomerType;
        this.CustomerType = custselected.CustomerType;
    }
    Clear() {
        this.currentCustomer = new Customer();
    }
    Update() {
        for (let cust of this.customers) {
            if (cust.CustomerCode == this.currentCustomer.CustomerCode) {
                cust.CustomerName = this.currentCustomer.CustomerName;
                cust.CustomerAmount = this.currentCustomer.CustomerAmount;
            }
        }
        this.currentCustomer = new Customer();
    }
    Add() {
        this.customers.push(this.currentCustomer);
        // new fresh reference
        this.customers = this.customers.slice();
        this.currentCustomer = new Customer();
    }
}