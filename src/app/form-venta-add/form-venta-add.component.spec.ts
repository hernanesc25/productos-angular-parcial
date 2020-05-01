import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVentaAddComponent } from './form-venta-add.component';

describe('FormVentaAddComponent', () => {
  let component: FormVentaAddComponent;
  let fixture: ComponentFixture<FormVentaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVentaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVentaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
