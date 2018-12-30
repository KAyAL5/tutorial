import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTimeTableComponent } from './studenttimetable.component';

describe('StudentTimeTableComponent', () => {
  let component: StudentTimeTableComponent;
  let fixture: ComponentFixture<StudentTimeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTimeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
