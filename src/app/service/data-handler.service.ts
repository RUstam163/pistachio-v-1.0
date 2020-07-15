import { Injectable } from '@angular/core';
import {CategoryModel} from '../model/category.model';
import {TestData} from '../data/test-data';
import {TaskModel} from '../model/task.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new Subject<TaskModel[]>();

  constructor() { }

  getCategories(): CategoryModel[] {
    return TestData.categories;
  }

  fillTasks() {
    this.tasksSubject.next(TestData.tasks);
  }
  fillTasksByCategory(category: CategoryModel) {
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasks);
  }
}
