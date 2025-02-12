import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioInfoComponent } from './portafolio-info.component';

describe('PortafolioInfoComponent', () => {
  let component: PortafolioInfoComponent;
  let fixture: ComponentFixture<PortafolioInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortafolioInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
