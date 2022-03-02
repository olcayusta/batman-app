import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hero} from "./hero.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Hero> {
    return this.http.get<Hero>(`https://jsonplaceholder.typicode.com/todos/1`);
  }

  getData2(): Observable<Hero> {
    return this.http.get<Hero>(`https://jsonplaceholder.typicode.com/todos/2`);
  }
}
