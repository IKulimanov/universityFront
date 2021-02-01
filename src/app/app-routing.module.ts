import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import {RegistrComponent} from './registr/registr.component';
import {StudentComponent} from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';
import {DisciplineStudentComponent} from './discipline-student/discipline-student.component';
import {DisciplineTeacherComponent} from './discipline-teacher/discipline-teacher.component';
import {AdminComponent} from './admin/admin.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrComponent
  },
  {
    path: 'student',
    component: StudentComponent
  }
  ,
  {
    path: 'disciplineStudent',
    component: DisciplineStudentComponent
  },
  {
    path: 'teach',
    component: TeacherComponent
  },
  {
    path: 'disciplineTeacher',
    component: DisciplineTeacherComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
