import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BatmanComponent } from "./components/batman/batman.component";
import { SupermanComponent } from "./components/superman/superman.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "batman",
  },
  {
    path: "batman",
    component: BatmanComponent,
  },
  {
    path: "superman",
    component: SupermanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
