import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5', () => {
	const service: CalculadoraService = TestBed.get(CalculadoraService);
	let soma = service.calcular(1, 4, CalculadoraService.SOMA);
	expect(soma).toEqual(5);
  });

  it('deve retornar 0 para operacao inválida', () => {
	const service: CalculadoraService = TestBed.get(CalculadoraService);
	let soma = service.calcular(1, 4, '%');
	expect(soma).toEqual(0);
  });
});
