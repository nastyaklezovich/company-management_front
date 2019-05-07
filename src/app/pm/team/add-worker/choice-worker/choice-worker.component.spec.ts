import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceWorkerComponent } from './choice-worker.component';

describe('ChoiceWorkerComponent', () => {
  let component: ChoiceWorkerComponent;
  let fixture: ComponentFixture<ChoiceWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
