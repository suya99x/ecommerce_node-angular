import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject } from "rxjs";
import { Cart, cartItem } from "../modules/interface/cart";
import { loadStripe } from "@stripe/stripe-js";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(
    private readonly snackbar: MatSnackBar,
    private readonly http: HttpClient
  ) {}

  checkout(): void {
    this.http
      .post("http://localhost:4242/checkout", {
        items: this.cart.value.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe(
          "pk_test_51MF9zAKpjCt0aKNFrvJN5butKxzGFlmIO1LZqYvIFWyAFL8EiIajI7EQlGLalhJZSGv5AM348S2iyWfF0mxZrVDO00314REO8H"
        );
        stripe?.redirectToCheckout({ sessionId: res.id });
      });
  }

  addToCart(item: cartItem): void {
    //retrives all item of cart
    const items = [...this.cart.value.items];
    //to check whether same item is in cart to increase quantity
    const itemInCart = items.find((_data) => _data.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }
    this.cart.next({ items });
    this.snackbar.open("1 item added to cart", "Ok", { duration: 3000 });
  }

  getTotal(items: Array<cartItem>): number {
    //reduce to get total and setting inital value to 0
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }
  clearCart(): void {
    this.cart.next({ items: [] });
    this.snackbar.open("cart is cleared", "ok", { duration: 3000 });
  }

  removeFromCart(item: cartItem, updateCart = true): cartItem[] {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );
    if (updateCart) {
      this.cart.next({ items: filteredItems });
      this.snackbar.open("1 item removed from cart.", "Ok", {
        duration: 3000,
      });
    }

    return filteredItems;
  }
  removeQuantity(item: cartItem): void {
    let itemForRemoval: cartItem | undefined;
    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
      }
      if (_item.quantity === 0) {
        itemForRemoval = _item;
      }
      return _item;
    });
    if (itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, false);
    }

    this.cart.next({ items: filteredItems });
    this.snackbar.open("1 item removed from cart.", "Ok", {
      duration: 3000,
    });
  }
}
