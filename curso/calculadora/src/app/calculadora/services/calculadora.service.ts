/**
 * Serviço responsável por executar as operações da calculadora.
 *
 * @autor Márcio C. de Souza<contato@kazale.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

	/* Define as constantes utilizadas para identificar as operações
	 de cálulo. */
	static readonly SOMA: string = '+';
	static readonly SUBTRACAO: string = '-';
	static readonly MULTIPLICACAO: string = '*';
	static readonly DIVISAO: string = '/';

  constructor() { }

  /**
   * Método que calcula uma operação matemática dado
   * dois números.
   * Suporta as operações de soma, subtração, divisão e multiplicação.
   *
   * @param {number} num1 Primeiro argumento da operação
   * @param {number} num2 Segundo argumento da operação
   * @param {string} operacao Tipo da operação
   * @return {number} Resultado da Operaçao
   * @type {Method}
   */
  calcular(num1: number, num2: number, operacao: string): number {
  	let resultado: number;

  	switch(operacao) {
  		case CalculadoraService.SOMA:
  			resultado = num1 + num2;
  			break;
  		case CalculadoraService.SUBTRACAO:
  			resultado = num1 - num2;
  			break;
  		case CalculadoraService.DIVISAO:
  			resultado = num1 / num2;
  			break;
  		case CalculadoraService.MULTIPLICACAO:
  			resultado = num1 * num2;
  			break;
  		default:
  			resultado = 0;
  			break;
  	}

  	return resultado;
  }
}
