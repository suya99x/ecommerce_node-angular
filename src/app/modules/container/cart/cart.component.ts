import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { loadStripe } from "@stripe/stripe-js";
import { CartService } from "src/app/services/cart.service";
import { Cart, cartItem } from "../../interface/cart";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styles: [],
})
export class CartComponent implements OnInit {
  public dataSource: Array<cartItem> = [];
  displayedColumns: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];
  constructor(
    private readonly cartService: CartService,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: Array<cartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item: cartItem): void {
    this.cartService.removeFromCart(item);
  }
  onRemoveQuantity(item: cartItem): void {
    this.cartService.removeQuantity(item);
  }

  onAddQuantity(item: cartItem): void {
    this.cartService.addToCart(item);
  }

  onCheckout(): void {
    this.cartService.checkout();
  }

  cart: Cart = {
    items: [],
  };
}
