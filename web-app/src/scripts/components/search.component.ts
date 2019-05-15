declare var componentHandler: any;

import { Component, OnInit, ChangeDetectionStrategy, OnChanges } from "@angular/core";
import { SearchContract } from "../models/searchContract.interface";
import { ContractsService } from "../services/contracts.service";
import { Response } from "@angular/http";

@Component({
    selector: 'search',
    templateUrl: '../../views/search.component.html',
    providers: [ContractsService],
    changeDetection: ChangeDetectionStrategy.Default
})

export class SearchComponent implements OnInit {

    searchObject: SearchContract;
    results: Array<any>;
    selectedContract: boolean;
    saveContract: boolean;
    totalContractsIsEmpty: boolean = false;
    toast: any;
    searching: boolean;
    formValid: boolean;
    showImage:boolean;

    ngAfterViewInit() {
        componentHandler.upgradeDom();
    }

    constructor(private _contractsService: ContractsService) {
        if (screen.width < 1024)
            this.showImage = false;
        else {
            this.showImage = true;
        }

        this.toast = document.querySelector('.mdl-js-snackbar');
    }

    ngOnInit() {
        this.searching = false;
        this.searchObject = {};
        this.results = [];
        this.selectedContract = false;
        this.saveContract = false;

    }

    retrieveInfo() {
        this._contractsService.searchContract(this.searchObject).subscribe((response: Response) => {
            this.results = response.json();
            console.log(this.results);
            if (this.results.length > 0) {
                this.totalContractsIsEmpty = false;
            }



        }, (error: any) => {
            this.toast.MaterialSnackbar.showSnackbar(
                { message: "Ocurrió un error al guardar el proveedor" });
        });
        this.searching = false;
    }

    isAtLeastOneValidField() {
        this.formValid = false;
        for (var value of Object.keys(this.searchObject)) {
            if (this.searchObject[value] != '') {
                this.formValid = true;
            }
        }

        return this.formValid;
    }

    deleteSelectedRow(result: any) {
        var index = this.results.findIndex((contract:any) => contract.id == result.id);
        this._contractsService.deleteContract(result.id).subscribe((response:Response)=>{
            this.results.splice(index,1);
        });
    }

    buscar() {
        this.searching = true;
        this.selectedContract = false;

        if (this.isAtLeastOneValidField()) {
            this.retrieveInfo();
        } else {
            this.results = [];
            this.totalContractsIsEmpty = true;
            this.searching = false;
        }



    }

    selectedResult(selectedRow: any) {
        this.selectedContract = true;

        if (selectedRow.status == 'guardado') {
            this.saveContract = true;
        } else {
            this.saveContract = false;
        }
    }
}