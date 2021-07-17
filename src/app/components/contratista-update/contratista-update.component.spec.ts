import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratistaUpdateComponent } from './contratista-update.component';

describe('ContratistaUpdateComponent', () => {
  let component: ContratistaUpdateComponent;
  let fixture: ComponentFixture<ContratistaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratistaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratistaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
