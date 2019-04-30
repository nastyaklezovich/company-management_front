import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerTeamComponent } from './worker-team.component';

describe('WorkerTeamComponent', () => {
  let component: WorkerTeamComponent;
  let fixture: ComponentFixture<WorkerTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
