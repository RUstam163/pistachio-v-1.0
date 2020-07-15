import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {CategoryModel} from '../../model/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: CategoryModel[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.categories = this.dataHandler.getCategories();
  }

  showTaskByCategory(category: CategoryModel) {
    this.dataHandler.fillTasksByCategory(category);
  }

}
