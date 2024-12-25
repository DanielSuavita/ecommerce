import { Category } from '@Shared/Models/category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories = signal<Category[]>([]);
  private http = inject(HttpClient);
  //[GET] https://api.escuelajs.co/api/v1/categories

  constructor() { }

  getCategories(){
    return this.http.get<Category[]>(`https://api.escuelajs.co/api/v1/categories`);
  }
}
