import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskStatusComponent } from './edit-task-status.component';

describe('EditTaskStatusComponent', () => {
  let component: EditTaskStatusComponent;
  let fixture: ComponentFixture<EditTaskStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTaskStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaskStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
