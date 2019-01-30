import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputEventComponent } from './output-event.component';

describe('OutputEventComponent', () => {
  let component: OutputEventComponent;
  let fixture: ComponentFixture<OutputEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
