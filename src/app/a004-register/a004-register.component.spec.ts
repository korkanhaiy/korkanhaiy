import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A004RegisterComponent } from './a004-register.component';

describe('A004RegisterComponent', () => {
  let component: A004RegisterComponent;
  let fixture: ComponentFixture<A004RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A004RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A004RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
