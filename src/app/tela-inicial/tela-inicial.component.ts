import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  isCadastro = false;
  isFormValid = true;
  email = '';
  password = '';

  email2 = '';
  password2 = '';
  email3 = '';
  password3 = '';

  routerLink = '';

  constructor() { }

  ngOnInit(): void { }


  setIsCadastro() {
    this.isCadastro = !this.isCadastro
    this.isFormValid = true;
  }

  direcionar() {
    if(this.isFormValid){
      this.routerLink = "/home"
    }
  }

  checkFormValid() {
    if (!this.isCadastro) {
      this.isFormValid = this.email != '' && this.password != '';
      return
    }

    this.isFormValid = this.email2 != '' && this.email3 != '' && this.password2 != '' && this.password3 != '';
  }


  getInputClass() {
    return this.isFormValid ? "input" : "input error"
  }
}
