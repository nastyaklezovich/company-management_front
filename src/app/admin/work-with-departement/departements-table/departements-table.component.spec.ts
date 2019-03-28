import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementsTableComponent } from './departements-table.component';

describe('DepartementsTableComponent', () => {
  let component: DepartementsTableComponent;
  let fixture: ComponentFixture<DepartementsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartementsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
