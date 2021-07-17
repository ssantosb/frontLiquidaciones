import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratistaDetailComponent } from './contratista-detail.component';

describe('ContratistaDetailComponent', () => {
  let component: ContratistaDetailComponent;
  let fixture: ComponentFixture<ContratistaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratistaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratistaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
