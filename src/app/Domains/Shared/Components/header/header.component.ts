import { Component, Input, inject, signal } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { CartComponent } from '@Shared/Components/cart/cart.component';
import { CartService } from '@Shared/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  SideMenu = signal(true);
  private CartService = inject(CartService);

  toggleSideMenu(event: Event) {
    this.SideMenu.update((prevState) => !prevState);
  }

  NumberOfProducts(){
    return this.CartService.getNumberofProducts();
  }
}
