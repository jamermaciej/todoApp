import { AuthService } from './../auth/auth.service';
import { AuthGuardsService } from './../auth/auth-guards.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/todoapp/collections/tasks';
  readonly params: HttpParams;

  constructor(private http: HttpClient, private authService: AuthService) {
    // this.getTasks();
  }

  getParams(): HttpParams {
    const uid = this.authService.user.uid;
    const query = {'userId': uid};
    return new HttpParams().set('apiKey', '')
    .append('q', JSON.stringify(query));
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, {params: this.getParams()});
  }
  saveTask(list: Array<Task>) {
    this.http.put(this.URL_DB, list, {params: this.getParams()}).subscribe( data => {
      console.log(data);
    });
  }
}
