import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Manager';
  tasks = [];
  descriptionTasks = [];
  constructor(private _httpService: HttpService) {
  }

  onShowAllTasks(): void {
    console.log("Showing all Tasks!");
    this.getTasksFromService();
  }

  onShowDescription(id: string): void {
    console.log("Showing one Description!");
    this.getDescriptionFromID(id);
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Showing all Tasks", data);
      for (let obj of data) {
        this.tasks.push(obj);
      }
      console.log(this.tasks);
    })
  }

  getDescriptionFromID(id) {
    let observable = this._httpService.getDescription(id);
    observable.subscribe(obj => {
      console.log("Showing Task", obj[0]);
      this.descriptionTasks.push(obj[0]);
    })
  }
}


