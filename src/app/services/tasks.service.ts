import { AngularFireAuth } from '@angular/fire/auth';
import { getTestBed } from '@angular/core/testing';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from '../../../node_modules/rxjs';
import { Task } from '../model/task';

@Injectable()
export class TasksService {

  // private taskList: Array<Task> = [];
  // private doneList: Array<Task> = [];

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  // private taskDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService, private angularFire: AngularFireAuth) {
    // this.taskList = [
    const taskList = [
      // {name: 'Sprzątanie', created: new Date().toLocaleString(), isDone: false},
      // {name: 'Zakupy', created: new Date().toLocaleString(), isDone: false},
      // {name: 'Zakupy', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true},
    ];
    this.taskListObs.next(taskList);

    angularFire.authState.subscribe( user => {
      if ( user ) {
        this.init();
      } else {
        this.taskListObs.next([]);
      }
    });
  }

  init() {
    this.httpService.getTasks().subscribe( tasks => {
      this.taskListObs.next(tasks);
    });
  }

  addTask(task: Task) {
    const regEx = /^$/;
    const trimTask = task.name ? task.name.trim() : '';
    if ( !regEx.test(task.name) ) {
      // this.taskList.push(task);
      // this.taskListObs.next(this.taskList);

      const list = this.taskListObs.getValue();
      list.push(task);
      this.taskListObs.next(list);
    } else {
      alert('Pole nie moze być puste!');
    }
  }

  removeTask( params ) {
    // this.taskList = this.taskList.filter( (t, i) => t !== params.task || i !== params.index);
    // this.taskListObs.next(this.taskList);
    // const list = this.taskListObs.getValue().filter( (t, i) => t.name !== params.task.name || t._id.$oid !== params.task._id.$oid);
    const list = this.taskListObs.getValue().filter( (t, i) => t.name !== params.task.name);
    this.taskListObs.next(list);
  }
  doneTask( params ) {
    params.task.end = new Date().toLocaleString();
    params.task.isDone = true;
    const list = this.taskListObs.getValue();
    this.taskListObs.next(list);

    // this.doneList.push(params.task);
    // this.removeTask( params );
    // this.taskDoneObs.next(this.doneList);
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }
  // getTaskDoneObs(): Observable<Array<Task>> {
  //   return this.taskDoneObs.asObservable();
  // }
  saveTaskInDb() {
    this.httpService.saveTask(this.taskListObs.getValue());
  }
}
