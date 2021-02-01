import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StudentComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'position', 'weak', 'teacher', 'auditoria', 'formOcenki'];
  columnsForDisplay = ['Название предмета', '№', 'Неделя', 'Преподаватель', 'Кабинет', 'Зачет/Экзамен'];
  expandedElement: PeriodicElement | null;
  numberWeak = 5;
  constructor() { }

  ngOnInit(): void {
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weak: string;
  teacher: string;
  auditoria: number;
  formOcenki: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Математика',
    weak: 'нечетная',
    teacher: 'Иванов',
    auditoria: 210,
    formOcenki: 'Зачет',
    description: 'дратути'
  }, {
    position: 2,
    name: 'Физика',
    weak: 'нечетная',
    teacher: 'Иванов',
    auditoria: 208,
    formOcenki: 'Экзамен',
    description: 'дратути'
  }, {
    position: 3,
    name: 'Химия',
    weak: 'нечетная',
    teacher: 'Иванов',
    auditoria: 301,
    formOcenki: 'Экзамен',
    description: 'дратути'
  }, {
    position: 4,
    name: 'Информатика',
    weak: 'нечетная',
    teacher: 'Иванов',
    auditoria: 122,
    formOcenki: 'Зачет',
    description: 'дратути'
  }
];
/*export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
