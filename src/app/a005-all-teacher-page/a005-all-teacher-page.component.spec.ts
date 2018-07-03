import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A005AllTeacherPageComponent } from './a005-all-teacher-page.component';

describe('A005AllTeacherPageComponent', () => {
  let component: A005AllTeacherPageComponent;
  let fixture: ComponentFixture<A005AllTeacherPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A005AllTeacherPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A005AllTeacherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
