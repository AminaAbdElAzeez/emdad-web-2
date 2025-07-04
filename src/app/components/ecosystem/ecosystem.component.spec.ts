import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemComponent } from './ecosystem.component';

describe('EcosystemComponent', () => {
  let component: EcosystemComponent;
  let fixture: ComponentFixture<EcosystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcosystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcosystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
