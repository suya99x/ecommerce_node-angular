import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "src/app/modules/interface/product";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",
  styles: [],
})
export class ProductBoxComponent {
  // when only one item expand to take full space category style
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();
  @Input() product: Product | undefined;

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
