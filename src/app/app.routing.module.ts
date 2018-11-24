import { AuthGuardsService } from './auth/auth-guards.service';
import { LoginComponent } from './auth/login/login.component';
import { TaskDoneComponent } from './task-done/task-done.component';
import { TaskListComponent } from './task-list/task-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'zadania',
        pathMatch: 'full'
    },
    {
        path: 'zadania',
        component: TaskListComponent,
        canActivate: [AuthGuardsService]
    },
    {
        path: 'wykonane',
        component: TaskDoneComponent,
        canActivate: [AuthGuardsService]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
