import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTimeTableComponent } from './teachertimetable.component';

describe('TeacherTimeTableComponent', () => {
  let component: TeacherTimeTableComponent;
  let fixture: ComponentFixture<TeacherTimeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherTimeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
