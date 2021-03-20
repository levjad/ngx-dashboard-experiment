import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrudtableComponent } from './crudtable.component';

describe('CrudtableComponent', () => {
  let component: CrudtableComponent;
  let fixture: ComponentFixture<CrudtableComponent>;

  beforeEach(waitForAsync(() => {
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
