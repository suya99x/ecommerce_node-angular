import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatBadgeModule } from "@angular/material/badge";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { HeaderComponent } from "./components/header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProductHeaderComponent } from "./modules/container/home/components/product-header/product-header.component";
import { FiltersComponent } from "./components/filters/filters.component";
import { HomeComponent } from "./modules/container/home/home.component";
import { ProductBoxComponent } from "./modules/container/home/components/product-box/product-box.component";
import { CartComponent } from "./modules/container/cart/cart.component";
import { CartService } from "./services/cart.service";
import { StoreService } from "./services/store.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    //left side bar
    MatExpansionModule,
    MatListModule,
    //header
    MatToolbarModule,
    //table inside card
    MatTableModule,
    MatBadgeModule,
    //popup
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [CartService, StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
