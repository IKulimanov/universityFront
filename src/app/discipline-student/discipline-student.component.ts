import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discipline-student',
  templateUrl: './discipline-student.component.html',
  styleUrls: ['./discipline-student.component.scss']
})
export class DisciplineStudentComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'position', 'status', 'date'];
  columnsForDisplay = ['Название предмета', '№ лабы', 'Состояние', 'Дата сдачи'];
  expandedElement: PeriodicElement | null;
  discipline = 'Математика';
  constructor() { }

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  name: string;
  position: number;
  status: string;
  date: string;
  }

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Докер',
    status: 'не сдано',
    date: '-',
    }, {
    position: 2,
    name: 'Consul',
    status: 'сдано',
    date: '12.10.2019',
  }, {
    position: 3,
    name: 'ELK',
    status: 'не сдано',
    date: '-',
  }, {
    position: 4,
    name: 'KeyCLoak',
    status: 'сдано',
    date: '24.11.2019',
  }
];
