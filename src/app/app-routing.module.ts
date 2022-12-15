import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./modules/container/cart/cart.component";
import { HomeComponent } from "./modules/container/home/home.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "cart", component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
