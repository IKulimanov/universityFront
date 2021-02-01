import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplineStudentComponent } from './discipline-student.component';

describe('DisciplineStudentComponent', () => {
  let component: DisciplineStudentComponent;
  let fixture: ComponentFixture<DisciplineStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplineStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplineStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
