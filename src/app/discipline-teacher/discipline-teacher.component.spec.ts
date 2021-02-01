import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplineTeacherComponent } from './discipline-teacher.component';

describe('DisciplineTeacherComponent', () => {
  let component: DisciplineTeacherComponent;
  let fixture: ComponentFixture<DisciplineTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplineTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplineTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
