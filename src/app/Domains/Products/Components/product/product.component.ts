import { Product } from '@Shared/Models/Product.Model';
import { ReversePipe } from '@Shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@Shared/pipes/time-ago.pipe';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {

  @Input({ required: true }) Product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    console.log('Click From Child');
    this.addToCart.emit(this.Product);
  }
}
