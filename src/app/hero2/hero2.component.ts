import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from "rxjs";
import {Hero} from "../hero.model";
import {DataService} from "../data.service";

@Component({
  selector: 'app-hero2',
  templateUrl: './hero2.component.html',
  styleUrls: ['./hero2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Hero2Component implements OnInit {
  data$!: Observable<Hero>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.data$ = this.dataService.getData2();
  }
}
