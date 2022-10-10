import { Component} from '@angular/core';
import { mock_category_list } from 'src/app/navigation/mock_category_list';
import { CategoryCardModel } from 'src/app/navigation/category-card.model';
import {mock_category_list2} from 'src/app/navigation/mock_category_list2';


@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent{

  categories: CategoryCardModel [] = [];
  categories2: CategoryCardModel [] = [];

  constructor() {
    for(var x of mock_category_list){
      console.log(x);
      this.categories.push(x);
    }

    for(var y of mock_category_list2){
      console.log(y);
      this.categories2.push(y);
    }

  }

}
