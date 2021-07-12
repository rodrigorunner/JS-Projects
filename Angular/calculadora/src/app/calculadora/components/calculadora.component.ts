import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  
  // Definir 4 atributos privados
  private numero1: string = '';
  private numero2: string = '';
  private operacao: string = '';
  private resultado: number = 0;

  constructor(private calculadoraService: CalculadoraService) { }


  ngOnInit(): void {
    this.limpar();
  }


  /**
   * Limpa todos os operadores para o valor padrão.
   * 
   * @return void
   */

  limpar(): void {
    this.numero1 = '';
    this.numero2 = '';
    this.operacao = '';
    this.resultado;
  }

  /**
   * Adiciona o número selecionado para um cálculo posteriormente.
   * 
   * @return void 
   */
  adicionarNumero(numero: string): void {
    if(this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  /**
   * Retorna o valor concatenado. Trata o valor decimal
   * 
   * @return void
   */

  concatenarNumero(numAtual: string, numConcat: string): string {
    // caso contenha apenas 0 ou null, reinicia o valor
    if(numAtual === '0' || numAtual === null) {
      numAtual = '';
    }
    // Primeiro dígito é '.', concatena zero antes do ponto.
    if(numConcat === '.' && numAtual === '') {
      numAtual = '0.';
    }
    // Caso '.' digitado e conhtenha um ponto, retorne o número atual.
    if(numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    } 

    return numAtual + numConcat;
  }

  /* Caso operação definida e número dois selecionado, 
     efetue a operação */
  definirOperacao(operacao: string): void {
    // Apenas defina operação caso não exista uma;
    if(this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    if(this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      )
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = '';
      this.resultado = 0;
    }
  }

  /**
   * Efetua o cálculo de uma operação
   * 
   * @return void
   */
  calcular(): void {
    if(this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    )
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora
   * 
   * @return string
   */
  get display(): string {
    
    if(this.resultado !== null) {
       return this.resultado.toString();
    }

    if(this.numero2 !== null) {
      return this.numero2;
    }

    return this.numero1;
  }
}
