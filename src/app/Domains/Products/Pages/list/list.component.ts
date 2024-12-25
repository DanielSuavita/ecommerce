import { Component, inject, signal, Input, SimpleChanges } from '@angular/core';
import { ProductComponent } from '@Products/Components/product/product.component';
import { Product } from '@Shared/Models/Product.Model';
import { HeaderComponent } from '@Shared/Components/header/header.component';
import { CartService } from '@Shared/services/cart.service';
import { ProductService } from '@Shared/services/product.service';
import { CategoryService } from '@Shared/services/category.service';
import { Category } from '@Shared/Models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export default class ListComponent {
  @Input() category_id?: string;
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private CartService = inject(CartService);
  private ProductService = inject(ProductService);
  private CategoryService = inject(CategoryService);

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges){
      this.getProducts();
  }

  private getProducts() {
    this.ProductService.getProducts(this.category_id).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {
        console.log('No Funcionó');
      },
    });
  }

  private getCategories() {
    this.CategoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: () => {
        console.log('No Funcionó');
      },
    });
  }

  AddToCart(product: Product) {
    this.CartService.addToCart(product);
  }
}
