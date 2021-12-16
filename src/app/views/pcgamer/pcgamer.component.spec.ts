import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcgamerComponent } from './pcgamer.component';

describe('PcgamerComponent', () => {
  let component: PcgamerComponent;
  let fixture: ComponentFixture<PcgamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcgamerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcgamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
