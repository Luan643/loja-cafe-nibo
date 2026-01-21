import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarProdutos } from './criar-produtos';

describe('CriarProdutos', () => {
  let component: CriarProdutos;
  let fixture: ComponentFixture<CriarProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarProdutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarProdutos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
