import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  isCadastro = false;

  constructor() { }

  ngOnInit(): void {
  }

  setIsCadastro() {
    this.isCadastro = !this.isCadastro
  }

}
