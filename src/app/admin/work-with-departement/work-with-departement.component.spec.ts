import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithDepartementComponent } from './work-with-departement.component';

describe('WorkWithDepartementComponent', () => {
  let component: WorkWithDepartementComponent;
  let fixture: ComponentFixture<WorkWithDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkWithDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkWithDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
