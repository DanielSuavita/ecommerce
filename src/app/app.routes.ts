import { Routes } from '@angular/router';
import { NotfoundComponent } from '@Info/Components/notfound/notfound.component';
import { LayoutComponent } from '@Shared/Components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import(`@Products/Pages/list/list.component`),
      },
      {
        path: 'about',
        loadComponent: () => import(`@Info/Pages/about/about.component`),
      },
      {
        path: 'product/:id',
        loadComponent: () => import(`@Products/Pages/detail/detail.component`),
      },
    ],
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
