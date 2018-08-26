"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forms_1 = require("@angular/forms");
class Customer {
    constructor() {
        this.CustomerName = "";
        this.CustomerCode = "";
        this.CustomerAmount = 0;
        this.CustomerType = "";
        this.CustomerGroupValidator = null;
        var _builder = new forms_1.FormBuilder();
        this.CustomerGroupValidator = _builder.group({
            'CustomerName': ['', forms_1.Validators.required],
            'CustomerCode': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$")
                ])],
            'CustomerAmount': ['', forms_1.Validators.required]
        });
    }
    IsDirty(controlName, typeOfValidator) {
        if (controlName.length == 0) {
            return this.CustomerGroupValidator.dirty;
        }
        else {
            return (!this.CustomerGroupValidator.controls[controlName].dirty);
        }
    }
    IsValid(element, typeOfValidation) {
        if (element.length == 0) {
            return this.CustomerGroupValidator.valid;
        }
        else {
            return (!this.CustomerGroupValidator.controls[element].hasError(typeOfValidation));
        }
        //if (this.CustomerName.length == 0) {
        //    return false;
        //}
        //if (this.CustomerCode.length == 0) {
        //    return false;
        //}
        //if (this.CustomerAmount <= 0) {
        //    return false;
        //}
        //return true;
    }
    ;
}
exports.Customer = Customer;
class Lead extends Customer {
    IsValid() {
        if (this.CustomerName.length == 0) {
            return false;
        }
        if (this.CustomerCode.length == 0) {
            return false;
        }
        return true;
    }
}
exports.Lead = Lead;
//# sourceMappingURL=Customer.js.map