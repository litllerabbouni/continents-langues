import { Component, OnInit } from '@angular/core';
import { ContinentService } from 'src/app/services/continent.service';
import { Continent } from '../../interfaces/Continent';

@Component({
    selector: 'app-continent-list',
    templateUrl: './continent-list.component.html',
    styleUrls: ['./continent-list.component.scss']
})
export class ContinentListComponent implements OnInit {

    columnsToDisplay : string[] = ['id', 'code', 'name'];
    dataSource: Continent[] = [];
    continent = {};

    constructor(private continentService: ContinentService) { }

    ngOnInit(): void {
        this.continentService.getContinents().subscribe( 
        res => {   
            this.dataSource  =  res;
        })
    }
  
}
function subscriber(arg0: (res: any) => void, arg1: (err: any) => void) {
    throw new Error('Function not implemented.');
}

