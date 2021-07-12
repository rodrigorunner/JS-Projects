/**
 * Serviço responsável por efetuar as operações da calculadora.
 * 
 * @author Rodrigo Regis<rodrigoregisrun@gmail.com>
 * @since 1.0.0
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  /* Constantes responsáveis por realizara operação aritmética */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Classe responsável por realizar os calculos matemáticos.
   * Suporta as operações soma, subtração, divisão e multiplicação.
   * 
   * @param numb1 number
   * @param numb2 number
   * @param operacao string
   * @returns number
   */

  calcular(numb1: number, numb2: number, operacao: string): number {
    let resultado: number; // armazena o resultado da operação

    switch(operacao) {
      case CalculadoraService.SOMA:
         resultado = numb1 + numb2;
      break;

      case CalculadoraService.SUBTRACAO:
        resultado = numb1 - numb2;
      break;

      case CalculadoraService.DIVISAO:
        resultado = numb1 / numb2;
      break;

      case CalculadoraService.MULTIPLICACAO:
        resultado = numb1 * numb2;
      break;
      default:
        resultado = 0;
    }
    
    return resultado;

  } 
}
