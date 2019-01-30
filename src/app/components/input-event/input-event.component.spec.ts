import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEventComponent } from './input-event.component';

describe('InputEventComponent', () => {
  let component: InputEventComponent;
  let fixture: ComponentFixture<InputEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
