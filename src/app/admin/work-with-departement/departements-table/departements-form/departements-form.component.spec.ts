import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementsFormComponent } from './departements-form.component';

describe('DepartementsFormComponent', () => {
  let component: DepartementsFormComponent;
  let fixture: ComponentFixture<DepartementsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartementsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
