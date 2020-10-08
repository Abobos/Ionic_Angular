import { Component, OnDestroy, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    console.log('init');
  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getRecipes();
    console.log('enter');
  }

  ionViewDidEnter() {
    console.log('confrimed');
  }

  ionViewWillLeave() {
    console.log('leave');
  }

  ionViewDidLeave() {
    console.log('I have left');
  }
  ngOnDestroy() {
    console.log('destroy');
  }
}
