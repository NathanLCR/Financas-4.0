import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaRendaComponent } from './tela-renda.component';

describe('TelaRendaComponent', () => {
  let component: TelaRendaComponent;
  let fixture: ComponentFixture<TelaRendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaRendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaRendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
