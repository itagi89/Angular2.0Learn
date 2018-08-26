import { Customer } from "../Model/Customer";
import { Lead } from "../Model/Customer";
import { Injectable } from "@angular/core"

@Injectable()
export class FactoryCustomer {
    public create(TypeOfCustomer) {
        if (TypeOfCustomer == "Customer") {
            return new Customer;
        } else {
            return new Lead;
        }
    }

}