import { Component} from '@angular/core';
import { mock_category_list } from 'src/app/navigation/mock_category_list';
import { CategoryCardModel } from 'src/app/navigation/category-card.model';



@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent{

  categories: CategoryCardModel [] = [];

  constructor() {
    for(var category of mock_category_list){
      console.log(category);
      this.categories.push(category);
    }
  }

}
