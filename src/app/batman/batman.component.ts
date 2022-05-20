import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {DataService} from "../shared/data.service";
import {Observable} from "rxjs";
import {Hero} from "../hero.model";

@Component({
    selector: 'app-batman',
    templateUrl: './batman.component.html',
    styleUrls: ['./batman.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BatmanComponent implements OnInit {
    data$!: Observable<Hero>;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.data$ = this.dataService.getTodos1();
    }
}
