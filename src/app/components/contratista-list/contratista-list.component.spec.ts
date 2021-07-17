import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratistaListComponent } from './contratista-list.component';

describe('ContratistListComponent', () => {
  let component: ContratistaListComponent;
  let fixture: ComponentFixture<ContratistaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratistaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratistaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
