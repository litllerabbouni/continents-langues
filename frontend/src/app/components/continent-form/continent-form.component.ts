import { Component, OnInit } from '@angular/core';
import { ContinentService } from 'src/app/services/continent.service';
import { Continent } from '../../interfaces/Continent';
import { Router } from '@angular/router';

@Component({
    selector: 'app-continent-form',
    templateUrl: './continent-form.component.html',
    styleUrls: ['./continent-form.component.scss']
})
export class ContinentFormComponent implements OnInit {

    continent: Continent = {
        code: '',
        name: ''
    };

    constructor(
        private continentService: ContinentService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    submitContinent() {
        this.continentService.createContinent(this.continent).subscribe(
            res => {
                console.log(res);
                this.router.navigate(['/']);
            }
        )
    }

}
