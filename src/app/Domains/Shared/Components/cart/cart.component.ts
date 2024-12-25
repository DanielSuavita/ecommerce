import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { CartService } from '@Shared/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  @Input() hideSideMenu = signal(true);
  @Output() hideSideMenuEvent = new EventEmitter();

  private CartService = inject(CartService);
  products = this.CartService.cart;
  total = this.CartService.total;

  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }

}
