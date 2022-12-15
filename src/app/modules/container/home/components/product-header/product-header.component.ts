import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-product-header",
  templateUrl: "./product-header.component.html",
})
export class ProductHeaderComponent {
  //sending data outside to parent component
  @Output() columsCountChange: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() sortChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() itemCountChange: EventEmitter<number> = new EventEmitter<number>();
  sort = "desc";
  itemsShowCount = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
    this.itemCountChange.emit(count);
  }

  onColumsUpdated(colsNum: number): void {
    this.columsCountChange.emit(colsNum);
  }
}
