import { Component, OnInit } from "@angular/core";
import { TodoManageService } from "../todo-manage.service";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  searchVal = "";
  constructor(private service: TodoManageService) {}

  ngOnInit() {}

  clearInput() {
    this.searchVal = "";
  }

  addTodo($event) {
    if ($event.keyCode === 13) {
      $event.preventDefault();
      if (this.searchVal != "") {
        let time = formatDate(new Date(), "hh:mm a", "en-US", "+0530");
        this.service.addData(this.searchVal, time);
        this.searchVal = "";
      } else {
        alert("Enter Task");
      }
    }
  }
}
