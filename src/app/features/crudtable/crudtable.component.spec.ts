import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudtableComponent } from './crudtable.component';

describe('CrudtableComponent', () => {
  let component: CrudtableComponent;
  let fixture: ComponentFixture<CrudtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
