import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {DataService} from "../data.service";
import {Observable} from "rxjs";
import {Hero} from "../hero.model";


@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {
    data$!: Observable<Hero>;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.data$ = this.dataService.getData();
    }

}
