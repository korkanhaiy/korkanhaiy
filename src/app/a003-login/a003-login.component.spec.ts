import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A003LoginComponent } from './a003-login.component';

describe('A003LoginComponent', () => {
  let component: A003LoginComponent;
  let fixture: ComponentFixture<A003LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A003LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A003LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
