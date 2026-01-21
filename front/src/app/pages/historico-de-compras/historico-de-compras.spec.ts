import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoDeCompras } from './historico-de-compras';

describe('HistoricoDeCompras', () => {
  let component: HistoricoDeCompras;
  let fixture: ComponentFixture<HistoricoDeCompras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoDeCompras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoDeCompras);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
