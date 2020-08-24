import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddleaderComponent } from './addleader.component';

describe('AddleaderComponent', () => {
  let component: AddleaderComponent;
  let fixture: ComponentFixture<AddleaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddleaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddleaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
