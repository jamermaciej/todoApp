import { AuthGuardsService } from './auth/auth-guards.service';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { HttpService } from './services/http.service';
import { TasksService } from './services/tasks.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDoneComponent } from './task-done/task-done.component';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { UpperPipe } from './shared/upper.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const config = {
  apiKey: "",
  authDomain: "todoapp-f0d41.firebaseapp.com",
  databaseURL: "https://todoapp-f0d41.firebaseio.com",
  projectId: "todoapp-f0d41",
  storageBucket: "todoapp-f0d41.appspot.com",
  messagingSenderId: "220351746719"
};

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskListComponent,
    TaskDoneComponent,
    CheckedDirective,
    DateDirective,
    UpperPipe,
    SortNamePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [TasksService, HttpService, AuthService, AuthGuardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
