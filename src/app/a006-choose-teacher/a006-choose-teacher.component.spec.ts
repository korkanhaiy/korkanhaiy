import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A006ChooseTeacherComponent } from './a006-choose-teacher.component';

describe('A006ChooseTeacherComponent', () => {
  let component: A006ChooseTeacherComponent;
  let fixture: ComponentFixture<A006ChooseTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A006ChooseTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A006ChooseTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
