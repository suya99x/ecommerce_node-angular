import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Subscription } from "rxjs";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory: EventEmitter<string> = new EventEmitter<string>();
  categoriesSubcription: Subscription | undefined;
  categories: Array<string> | undefined;

  constructor(private readonly storeService: StoreService) {}

  ngOnInit(): void {
    this.categoriesSubcription = this.storeService
      .getAllCategories()
      .subscribe((res) => {
        this.categories = res;
      });
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    if (this.categoriesSubcription) {
      this.categoriesSubcription.unsubscribe();
    }
  }
}
