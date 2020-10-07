import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      ingredients: ['rice', 'beans'],
    },
    {
      id: 'r2',
      title: 'Spanish',
      imageUrl: 'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
      ingredients: ['good', 'sphaghetti'],
    },
  ];
  constructor() {}

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId) {
    return { ...this.recipes.find(({ id }) => recipeId === id) };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(({ id }) => id !== recipeId);
    console.log({ services: this.recipes });
  }
}
