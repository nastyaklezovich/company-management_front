import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithWorkersComponent } from './work-with-workers.component';

describe('WorkWithWorkersComponent', () => {
  let component: WorkWithWorkersComponent;
  let fixture: ComponentFixture<WorkWithWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkWithWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkWithWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
