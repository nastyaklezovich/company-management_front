import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersRequestsTableComponent } from './workers-requests-table.component';

describe('WorkersRequestsTableComponent', () => {
  let component: WorkersRequestsTableComponent;
  let fixture: ComponentFixture<WorkersRequestsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkersRequestsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersRequestsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
