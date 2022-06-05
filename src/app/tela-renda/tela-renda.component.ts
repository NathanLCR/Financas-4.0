import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-tela-renda',
  templateUrl: './tela-renda.component.html',
  styleUrls: ['./tela-renda.component.css']
})
export class TelaRendaComponent implements OnInit {
  isCadastro = false;
  isCadastroCategoria = false;
  rendas = [] as any;
  pos = 0;
  constructor() {
    console.log(this.rendas)
  }

  ngOnInit(): void {

  }

  addRenda() {
    this.rendas.push({indice: this.pos,data: $('#data').val(), valor: $('#valor').val(), descricao: $('#descricao').val(), categoria: $('#categoria').val()})
    this.pos++;
    this.isCadastro = !this.isCadastro
  }

  setIsCadastro() {
    this.isCadastro = !this.isCadastro
  }

  setIsCategoria() {
    this.isCadastroCategoria = !this.isCadastroCategoria
  }

  deleteRenda() {
    this.rendas.pop();
  }
}
