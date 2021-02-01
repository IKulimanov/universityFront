import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrComponent} from './registr/registr.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { RestService } from './rest.service';
import {HttpClientModule} from '@angular/common/http';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { DisciplineStudentComponent } from './discipline-student/discipline-student.component';
import { DisciplineTeacherComponent } from './discipline-teacher/discipline-teacher.component';
import {TeacherDialogComponent} from './teacher/teacher.component';
import {AdminDialogComponent} from './admin/admin.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrComponent,
    StudentComponent,
    TeacherComponent,
    AdminComponent,
    DisciplineStudentComponent,
    DisciplineTeacherComponent,
    TeacherDialogComponent,
    AdminDialogComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatStepperModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
