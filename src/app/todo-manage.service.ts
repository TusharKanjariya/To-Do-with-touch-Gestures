import { Injectable } from "@angular/core";
import { formatDate } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class TodoManageService {
  constructor() {}

  todos = [
    { id: 1, title: "Morning Breakfast", time: "07:00 AM" },
    { id: 2, title: "Go to Office", time: "09:00 AM" }
  ];

  getData() {
    return this.todos;
  }

  addData(title, time) {
    this.todos.push({ id: Date.now(), title: title, time: time });
    console.log(title, time);
  }

  deleteData(id) {
    this.todos.splice(id, 1);
  }

  editData(id, taskText) {
    this.todos[id].title = taskText;
    this.todos[id].time = formatDate(new Date(), "hh:mm a", "en-US", "+0530");
  }
}
