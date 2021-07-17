import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratistaCreateComponent } from './contratista-create.component';

describe('ContratistaCreateComponent', () => {
  let component: ContratistaCreateComponent;
  let fixture: ComponentFixture<ContratistaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratistaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratistaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
