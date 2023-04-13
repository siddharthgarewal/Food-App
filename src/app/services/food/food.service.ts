import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        star: 4.0,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: 'assets/food-1.jpg',
        origins: ['italy'],
      },
      {
        id: 2,
        name: 'Pepperoni',
        cookTime: '30-40',
        price: 100,
        favorite: true,
        star: 4.5,
        tags: ['FastFood', 'Pepperoni', 'Dinner'],
        imageUrl: 'assets/food-1.jpg',
        origins: ['italy', 'mexican'],
      }
    ]
  }
}
