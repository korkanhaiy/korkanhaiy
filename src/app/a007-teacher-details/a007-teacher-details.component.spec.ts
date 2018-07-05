import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A007TeacherDetailsComponent } from './a007-teacher-details.component';

describe('A007TeacherDetailsComponent', () => {
  let component: A007TeacherDetailsComponent;
  let fixture: ComponentFixture<A007TeacherDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A007TeacherDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A007TeacherDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
