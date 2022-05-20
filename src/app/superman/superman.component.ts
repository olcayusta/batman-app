import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from "rxjs";
import {Hero} from "../hero.model";
import {DataService} from "../shared/data.service";

@Component({
  selector: 'app-superman',
  templateUrl: './superman.component.html',
  styleUrls: ['./superman.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupermanComponent implements OnInit {
  data$!: Observable<Hero>;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.data$ = this.dataService.getTodos2();
  }
}
