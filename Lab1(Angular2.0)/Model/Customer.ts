import {
    NgForm,
    FormGroup,
    FormControl,
    FormBuilder,
    Validators,
} from "@angular/forms";

export class Customer {
    CustomerName: string = "";
    CustomerCode: string = "";
    CustomerAmount: number = 0;
    CustomerType: string = "";
    CustomerGroupValidator: FormGroup = null;
    constructor() {
        var _builder = new FormBuilder();

        this.CustomerGroupValidator = _builder.group({
            'CustomerName': ['', Validators.required],
            'CustomerCode': ['', Validators.compose([Validators.required, Validators.pattern("^[A-Z]{1,1}[0-9]{4,4}$")
            ])],
            'CustomerAmount': ['', Validators.required]
                                                    });

    }

    IsDirty(controlName, typeOfValidator): boolean {

        if (controlName.length == 0) {
            return this.CustomerGroupValidator.dirty;
        } else {
            return (!this.CustomerGroupValidator.controls[controlName].dirty);
        }
    }


    IsValid(element, typeOfValidation): boolean {
        if (element.length == 0) {
            return this.CustomerGroupValidator.valid;
        } else {

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
    };
}

export class Lead extends Customer
{
    IsValid(): boolean
    {
        if (this.CustomerName.length == 0) {
            return false;
        }
        if (this.CustomerCode.length== 0) {
            return false;
        }
        return true;
    }
    
}