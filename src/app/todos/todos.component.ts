import { Component, OnInit } from "@angular/core";
import { TodoManageService } from "../todo-manage.service";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  constructor(private service: TodoManageService) {}

  todos: any = [];
  showDialog: any = null;
  editedVal: any = "";

  getTodos() {
    this.todos = this.service.getData();
  }
  ngOnInit() {
    this.getTodos();
  }
  delete($event, id) {
    this.service.deleteData(id);
  }

  openEdit(data) {
    this.showDialog = data.id;
    console.log(data);
  }

  editTodo($event, id) {
    if ($event.keyCode === 13) {
      $event.preventDefault();
      if (this.editedVal != "") {
        this.service.editData(id, this.editedVal);
        this.service.getData();
        this.showDialog = null;
      } else {
        alert("Enter Task");
      }
    }
  }
}
