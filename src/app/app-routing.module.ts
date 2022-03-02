import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroComponent} from "./hero/hero.component";
import {Hero2Component} from "./hero2/hero2.component";

const routes: Routes = [
  {
    path: 'hero',
    component: HeroComponent
  },
  {
    path: 'hero2',
    component: Hero2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
