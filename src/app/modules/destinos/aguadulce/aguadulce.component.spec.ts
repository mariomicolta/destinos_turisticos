import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AguadulceComponent } from './aguadulce.component';

describe('AguadulceComponent', () => {
  let component: AguadulceComponent;
  let fixture: ComponentFixture<AguadulceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AguadulceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AguadulceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
