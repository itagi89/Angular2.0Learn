import { Component ,Input,Output,EventEmitter} from "@angular/core"
import { Array } from "core-js";

@Component({
    selector: "grid-ui",
    templateUrl:"../UI/Grid.html"
})

export class GridComponent {

    constructor() {
        this.gridColumns = [];
        this.gridData = [];
        console.log("Constructor called");
    }
    @Output("grid-selected")
    selected: EventEmitter<Object> = new EventEmitter<Object>();
    gridColumns: Object[];

    gridData: Object[];
    @Input("grid-entityName")
    entityName: string = "";
    @Input("grid-data")
    set gridDataSet(_gridData: Object[]) {
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
    };
    Select(_gridSelect: Object) {
        this.selected.emit(_gridSelect);
    }

    ngOnInit() {
        console.log("on Init");
    };
    ngAfterContentInit() {
        console.log("After content Init");
    };
    ngAfterViewInit() {
        console.log("After View Init called");
    };
    ngDoCheck() {
        console.log("Do check");
    };
    ngAfterContentChecked() {
        console.log("After content checked");
    };
    ngAfterViewchecked() {
        console.log("After view Checked");
    };
}