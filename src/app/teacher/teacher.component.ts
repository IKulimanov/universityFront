import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  edit: string;
}
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'position', 'weak', 'auditoria', 'group', 'formOcenki'];
  columnsForDisplay = ['Название предмета', '№', 'Неделя', 'Кабинет', 'Группа', 'Зачет/Экзамен'];
  expandedElement: PeriodicElement | null;
  numberWeak = 5;
  constructor(public dialog: MatDialog) { }
  edit: string;
  openDialog(): void {
    const dialogRef = this.dialog.open(TeacherDialogComponent, {
      width: '250px',
      data: {edit: this.edit}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.edit = result;
    });
  }
  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weak: string;
  auditoria: number;
  group: string;
  formOcenki: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Java',
    weak: '1-18',
    auditoria: 301,
    group: 'ИВС-5',
    formOcenki: 'Экзамен'
  }, {
    position: 3,
    name: 'Java',
    weak: '1-18',
    auditoria: 301,
    group: 'ИЭМ-10',
    formOcenki: 'Экзамен'
  }, {
    position: 4,
    name: 'Распределенные системы',
    weak: '1-12',
    auditoria: 122,
    group: 'ПИМ-19',
    formOcenki: 'Зачет'
  }
];
@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'input-message.html',
})
export class TeacherDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TeacherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
