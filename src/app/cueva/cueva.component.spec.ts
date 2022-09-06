import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuevaComponent } from './cueva.component';

describe('CuevaComponent', () => {
  let component: CuevaComponent;
  let fixture: ComponentFixture<CuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuevaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
