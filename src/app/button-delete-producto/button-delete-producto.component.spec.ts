import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDeleteProductoComponent } from './button-delete-producto.component';

describe('ButtonDeleteProductoComponent', () => {
  let component: ButtonDeleteProductoComponent;
  let fixture: ComponentFixture<ButtonDeleteProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDeleteProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDeleteProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
