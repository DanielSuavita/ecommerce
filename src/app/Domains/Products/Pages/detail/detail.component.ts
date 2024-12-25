import { Product } from '@Shared/Models/Product.Model';
import { CartService } from '@Shared/services/cart.service';
import { ProductService } from '@Shared/services/product.service';
import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export default class DetailComponent {
  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');
  private ProductService = inject(ProductService);
  private CartService = inject(CartService);

  ngOnInit() {
    if (this.id) {
      this.ProductService.getOne(this.id).subscribe({
        next: (product) => {
          console.log(product);
          this.product.set(product);
          if(product.images.length > 0){
            this.cover.set(product.images[0]);
          }
        },
      });
    }
  }

  changeCover(newImg: string){
    this.cover.set(newImg);
  }

  addToCart(){
    const product = this.product();
    if(product){
      this.CartService.addToCart(product);
    }
  }
}
