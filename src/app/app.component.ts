import { Component, OnInit } from "@angular/core";
import { Cart } from "./modules/interface/cart";
import { CartService } from "./services/cart.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };

  constructor(private readonly cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
