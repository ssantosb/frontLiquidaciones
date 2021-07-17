import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PioneroActualizarComponent } from './pionero-actualizar.component';

describe('PioneroActualizarComponent', () => {
  let component: PioneroActualizarComponent;
  let fixture: ComponentFixture<PioneroActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PioneroActualizarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PioneroActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
