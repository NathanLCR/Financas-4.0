import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-despesas',
  templateUrl: './tela-despesas.component.html',
  styleUrls: ['./tela-despesas.component.css']
})
export class TelaDespesasComponent implements OnInit {

  isCadastro = false;
  isCadastroCategoria = false;
  despesas = [] as any;
  constructor() { }

  ngOnInit(): void {

  }

  addDespesa() {
    this.despesas.push({data: $('#data').val(), valor: $('#valor').val(), descricao: $('#descricao').val(), categoria: $('#categoria').val()})
    this.isCadastro = !this.isCadastro
  }

  setIsCadastro() {
    this.isCadastro = !this.isCadastro
  }

  setIsCategoria() {
    this.isCadastroCategoria = !this.isCadastroCategoria
  }

}
