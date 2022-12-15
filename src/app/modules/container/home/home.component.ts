import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CartService } from "src/app/services/cart.service";
import { StoreService } from "src/app/services/store.service";
import { Product } from "../../interface/product";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 355, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit, OnDestroy {
  cols: number = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  products: Array<Product> | undefined;
  sort = "desc";
  limit = "12";
  productSubcription: Subscription | undefined;

  constructor(
    private readonly cartService: CartService,
    private readonly storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productSubcription = this.storeService
      .getAllProducts(this.limit, this.sort, this.category)
      .subscribe((_prodcuts) => {
        this.products = _prodcuts;
      });
  }

  onColumsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  }

  onItemCountChange(newCount: number): void {
    this.limit = newCount.toString();
    this.getProducts();
  }

  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getProducts();
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

  ngOnDestroy(): void {
    if (this.productSubcription) {
      this.productSubcription.unsubscribe();
    }
  }
}
