import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductoAddComponent } from './form-producto-add.component';

describe('FormProductoAddComponent', () => {
  let component: FormProductoAddComponent;
  let fixture: ComponentFixture<FormProductoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProductoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
