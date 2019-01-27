declare var componentHandler: any;

import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'search',
    templateUrl: '../../views/search.component.html'
})

export class SearchComponent implements OnInit {
    
    arrSearch = [
        {
            user: 'Nombre 1',
            provider: 'Proveedor 1',
            client: 'Cliente 1',
            product: 'Producto 1',
            route: 'Ruta 1',
            status: 'finalizado',
            bill_flamsa: 12356,
            bill_provider: 12456
        },
        {
            user: 'Nombre 2',
            provider: 'Proveedor 2',
            client: 'Cliente 2',
            product: 'Producto 2',
            route: 'Ruta 2',
            status: 'Guardado',
            bill_flamsa: 12356477,
            bill_provider: 1245678
        },
        {
            user: 'Nombre 3',
            provider: 'Proveedor 3',
            client: 'Cliente 3',
            product: 'Producto 3',
            route: 'Ruta 3',
            status: 'finalizado',
            bill_flamsa: 1235679416,
            bill_provider: 12456123645
        },
        {
            user: 'Nombre 4',
            provider: 'Proveedor 4',
            client: 'Cliente 4',
            product: 'Producto 4',
            route: 'Ruta 4',
            status: 'Guardado',
            bill_flamsa: 1235645654,
            bill_provider: 124561122
        }
    ];
    results:Array<any>;
    selectedContract: boolean;


    ngAfterViewInit() {
        componentHandler.upgradeDom();
      }

    constructor(){
    }

    ngOnInit(){
        this.results = [];
        this.selectedContract = false;
    }

    buscar(){
        this.results = this.arrSearch;
    }

    selectedResult(selectedRow: any){
        this.selectedContract = true;
    }
}