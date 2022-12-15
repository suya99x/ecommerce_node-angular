import { Component, Input } from "@angular/core";
import { Cart, cartItem } from "src/app/modules/interface/cart";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemQuantity: number = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  constructor(private readonly cartService: CartService) {}

  getTotal(items: Array<cartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }
  onCheckout(): void {
    this.cartService.checkout();
  }
}
