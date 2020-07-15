import {Injectable} from '@angular/core';
import {CategoryModel} from '../model/category.model';
import {TestData} from '../data/test-data';
import {TaskModel} from '../model/task.model';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<TaskModel[]>(TestData.tasks);
  categorySubject = new BehaviorSubject<CategoryModel[]>(TestData.categories);

  constructor() {
    this.fillTasks();
    // this.fillCategories();
  }

  // fillCategories() {
  //   this.categorySubject.next(TestData.categories);
  // }

  fillTasks() {
    this.tasksSubject.next(TestData.tasks);
  }

  fillTasksByCategory(category: CategoryModel) {
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasks);
  }

}
