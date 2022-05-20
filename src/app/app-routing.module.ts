import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BatmanComponent} from "./batman/batman.component";
import {SupermanComponent} from "./superman/superman.component";

const routes: Routes = [
  {
    path: 'batman',
    component: BatmanComponent
  },
  {
    path: 'superman',
    component: SupermanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
