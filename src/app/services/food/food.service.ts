import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): string[] {
    return [
      '/assets/food-1.jpg',
      '/assets/food-1.jpg',
      '/assets/food-1.jpg',
      '/assets/food-1.jpg',
      '/assets/food-1.jpg'
    ]
  }
}
