import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  // @Input()
  taskList: Array<Task> = [];
  // @Output()
  // emitDone = new EventEmitter<Object>();
  // @Output()
  // emitRemove = new EventEmitter<Object>();

  constructor(private tasksService: TasksService) {
    this.tasksService.getTaskListObs().subscribe( (tasks: Array<Task>) => {
      this.taskList = tasks.slice().filter( task => task.isDone === false );
      // dodanie slice() -> trick do sortowania, nowe elementy tez sa sortowane
      // tworzona jest nowa tablica, nowa referencja
    });
  }

  ngOnInit() {
  }

  removeTask(task: Task, index: number) {
    // this.emitRemove.emit( {task, index } );
    this.tasksService.removeTask( {task, index } );
  }
  doneTask(task: Task, index: number) {
    // this.emitDone.emit( {task, index } );
    this.tasksService.doneTask( {task, index } );
    // task.end = new Date().toLocaleString();
  }
  setBgColor() {
    return this.taskList.length > 5 ? 'red' : 'green';
  }
  save() {
    this.tasksService.saveTaskInDb();
  }
}
