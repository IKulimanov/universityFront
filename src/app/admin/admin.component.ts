import {Component, Inject, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DialogData, TeacherDialogComponent} from '../teacher/teacher.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdminComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'type', 'number', 'week', 'teacher', 'auditoria', 'formOcenki'];
  columnsForDisplay = ['Название предмета', 'Тип', '№', 'Неделя', 'Преподаватель', 'Кабинет', 'Экзамен/Зачет'];
  expandedElement: PeriodicElement | null;
  numberWeak = 5;
  typegroups: string[] = ['ИВС-15', 'ПИМ-19', 'ИПБ-4'];
  typestudents: string[] = ['Бирюлев', 'Головкин', 'Козин', 'Кулиманов', 'Назаренко', 'Паламарь', 'Соколов'];
  constructor(public dialog: MatDialog) {}
  edit: string;
  openDialog(): void {
    const dialogRef = this.dialog.open(AdminDialogComponent, {
      width: '500px',
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
  type: string;
  number: number;
  week: string;
  teacher: string;
  auditoria: number;
  formOcenki: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Моделирование систем',
    type: 'Лекция',
    number: 1,
    week: '1-18',
    teacher: 'Грызлова Т. П.',
    auditoria: 512,
    formOcenki: 'Зачет'
  }, {
    name: 'Системы распознавания',
    type: 'Лекция',
    number: 2,
    week: '1-9',
    teacher: 'Грызлова Т. П.',
    auditoria: 510,
    formOcenki: 'Экзамен'
  }, {
    name: 'Архитектура компьютерных систем',
    type: 'Практика',
    number: 3,
    week: '1-18',
    teacher: 'Вершинина В. В.',
    auditoria: 511,
    formOcenki: 'Экзамен'
  }, {
    name: 'Распределенные системы',
    type: 'Лр',
    number: 4,
    week: '1-12',
    teacher: 'Волков М. Л.',
    auditoria: 512,
    formOcenki: 'Экзамен' },
  {
    name: 'Модели и методы машинного обучения',
    type: 'Практика',
    number: 5,
    week: '1-18',
    teacher: 'Паламарь И. Н.',
    auditoria: 510,
    formOcenki: 'Экзамен' }
];

@Component({
  selector: 'app-dialog-overview-dialog',
  templateUrl: 'input-message.html',
})
export class AdminDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AdminDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

