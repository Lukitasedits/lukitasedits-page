import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductorTwitchComponent } from './reproductor-twitch.component';

describe('ReproductorTwitchComponent', () => {
  let component: ReproductorTwitchComponent;
  let fixture: ComponentFixture<ReproductorTwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReproductorTwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproductorTwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
