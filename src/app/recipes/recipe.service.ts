import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe/recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Burger', 'Big Burger', 'http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c1a8.png',
      [new Ingredient('Meat', 1),
        new Ingredient('Cheese slice', 1)]),
    new Recipe('Pizza', '4 Cheeses', 'http://schwans.web.products.s3.amazonaws.com/73184.jpg',
      [new Ingredient('Soft cheese ', 1),
        new Ingredient('Semi-soft cheese', 1),
        new Ingredient('Medium-hard cheese', 1),
        new Ingredient('Semi-hard or hard cheese', 1)]),
    new Recipe('Bread', 'Black bread', 'https://static1.squarespace.com/static/536924dee4b0b561109d1840/t/5452f49be4b000029111e110/1414722716602/',
      [new Ingredient('Milk', 1),
        new Ingredient('Wheat', 1),
        new Ingredient('Water', 1),
        new Ingredient('Salt', 1)])
  ];
  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  constructor(private slService: ShoppingListService) {
  }

}
