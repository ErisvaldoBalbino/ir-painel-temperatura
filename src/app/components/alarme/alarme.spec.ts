import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alarme } from './alarme';

describe('Alarme', () => {
  let component: Alarme;
  let fixture: ComponentFixture<Alarme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alarme],
    }).compileComponents();

    fixture = TestBed.createComponent(Alarme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
