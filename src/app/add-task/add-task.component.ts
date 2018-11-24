import { AuthService } from './../auth/auth.service';
import { TasksService } from '../services/tasks.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  newTask: string;
  // @Output()
  // emitTask = new EventEmitter<string>();

  constructor(private tasksService: TasksService, private authService: AuthService) { }

  ngOnInit() {
  }
  addTask() {
    // this.emitTask.emit(this.newTask);
    const task: Task = ({name: this.newTask, userId: this.authService.user.uid, created: new Date().toLocaleString(), isDone: false});
    this.tasksService.addTask(task);
    this.newTask = '';
  }
}
