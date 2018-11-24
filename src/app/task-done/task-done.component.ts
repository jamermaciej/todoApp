import { TasksService } from '../services/tasks.service';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.scss']
})
export class TaskDoneComponent implements OnInit {

  // @Input()
  doneList: Array<Task> = [];

  constructor(private taskServie: TasksService) {
    // this.taskServie.getTaskDoneObs().subscribe( (tasks: Array<Task>) => {
    //   this.doneList = tasks;
    // });

    this.taskServie.getTaskListObs().subscribe( (tasks: Array<Task>) => {
      this.doneList = tasks.filter( task => task.isDone === true );
    });
  }

  ngOnInit() {
  }

}
