import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AguasaladaComponent } from './aguasalada.component';

describe('AguasaladaComponent', () => {
  let component: AguasaladaComponent;
  let fixture: ComponentFixture<AguasaladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AguasaladaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AguasaladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
