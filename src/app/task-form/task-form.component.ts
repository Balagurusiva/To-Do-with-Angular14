import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input()tasks!:string[];
  newTask!:string;
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    this.tasks.unshift(this.newTask);
    localStorage.setItem('my_task', JSON.stringify(this.tasks));
    this.newTask = '';
  }

}
