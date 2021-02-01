import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discipline-teacher',
  templateUrl: './discipline-teacher.component.html',
  styleUrls: ['./discipline-teacher.component.scss']
})
export class DisciplineTeacherComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  dataSource1 = ELEMENT_DATA1;
  columnsToDisplay = ['famile', 'docker', 'consul', 'elk', 'keycloak'];
  columnsForDisplay = ['', 'Docker', 'Consul', 'ELK', 'KeyCloak'];
  columnsToDisplay1 = ['student', 'file', 'date', 'description'];
  columnsForDisplay1 = ['Студент', 'Файл', 'Дата', 'Примечание'];
  expandedElement: PeriodicElement | null;

  discipline = 'Распределенные системы';
  constructor() { }

  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  famile: string;
  docker: string;
  consul: string;
  elk: string;
  keycloak: string;
}

export interface PeriodicElement1 {
  student: string;
  file: string;
  date: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    famile: 'Иванов',
    docker: '',
    consul: '5',
    elk: '',
    keycloak: '3'
  }, {
    famile: 'Петров',
    docker: '4',
    consul: '',
    elk: '',
    keycloak: '',
  }, {
    famile: 'Смирнов ',
    docker: ' 5',
    consul: '5',
    elk: '4',
    keycloak: '5'
  }
];
const ELEMENT_DATA1: PeriodicElement1[] = [
  {
    student: 'Иванов',
    file: 'файл1.txt',
    date: '12.09.2019',
    description: 'Для лр  Consul',
  }, {
    student: 'Иванов',
    file: 'файл2.txt',
    date: '24.11.2019',
    description: 'Для лр KeyCloak',
  }
];
