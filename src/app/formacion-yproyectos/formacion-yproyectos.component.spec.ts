import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionYProyectosComponent } from './formacion-yproyectos.component';

describe('FormacionYProyectosComponent', () => {
  let component: FormacionYProyectosComponent;
  let fixture: ComponentFixture<FormacionYProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionYProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacionYProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
