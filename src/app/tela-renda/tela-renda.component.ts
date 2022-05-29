import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-renda',
  templateUrl: './tela-renda.component.html',
  styleUrls: ['./tela-renda.component.css']
})
export class TelaRendaComponent implements OnInit {
  isCadastro = false;
  isCadastroCategoria = false;
  rendas = [] as any;
  constructor() { }

  ngOnInit(): void {
    this.popularRendas();
  }

  popularRendas() {
    for (var i = 0; i < 5 ; i++){
      this.rendas.push({data: "29/05/2022", valor: 2000, descricao: "salario de desenvolvedor", categoria: "desenvolvedor"})
    }

  }

  setIsCadastro() {
    this.isCadastro = !this.isCadastro
  }

  setIsCategoria() {
    this.isCadastroCategoria = !this.isCadastroCategoria
  }
}
