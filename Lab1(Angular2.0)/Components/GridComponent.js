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
let GridComponent = class GridComponent {
    constructor() {
        this.selected = new core_1.EventEmitter();
        this.entityName = "";
        this.gridColumns = [];
        this.gridData = [];
        console.log("Constructor called");
    }
    set gridDataSet(_gridData) {
        debugger;
        if (_gridData.length > 0) {
            var gridColumnNames = Object.keys(_gridData[0]);
            var count = 0;
            this.gridColumns = gridColumnNames;
            //gridColumnNames.forEach(x=> {
            //    this.gridColumns.push(x);
            //});
            //for (var index of gridColumnNames) {
            //    this.gridColumns.push(index);
            //    count++;
            //}
            this.gridData = _gridData;
        }
    }
    ;
    Select(_gridSelect) {
        this.selected.emit(_gridSelect);
    }
    ngOnInit() {
        console.log("on Init");
    }
    ;
    ngAfterContentInit() {
        console.log("After content Init");
    }
    ;
    ngAfterViewInit() {
        console.log("After View Init called");
    }
    ;
    ngDoCheck() {
        console.log("Do check");
    }
    ;
    ngAfterContentChecked() {
        console.log("After content checked");
    }
    ;
    ngAfterViewchecked() {
        console.log("After view Checked");
    }
    ;
};
__decorate([
    core_1.Output("grid-selected"),
    __metadata("design:type", core_1.EventEmitter)
], GridComponent.prototype, "selected", void 0);
__decorate([
    core_1.Input("grid-entityName"),
    __metadata("design:type", String)
], GridComponent.prototype, "entityName", void 0);
__decorate([
    core_1.Input("grid-data"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], GridComponent.prototype, "gridDataSet", null);
GridComponent = __decorate([
    core_1.Component({
        selector: "grid-ui",
        templateUrl: "../UI/Grid.html"
    }),
    __metadata("design:paramtypes", [])
], GridComponent);
exports.GridComponent = GridComponent;
//# sourceMappingURL=GridComponent.js.map