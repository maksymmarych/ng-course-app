import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe/recipe.module';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test1 Recipe', 'Test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Test2 Recipe', 'Test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Test3 Recipe', 'Test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Test4 Recipe', 'Test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Test5 Recipe', 'Test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() {
  }

}
