import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field'

import { HomeComponent } from './views/home/home.component'
import { TelaRendaComponent } from './tela-renda/tela-renda.component'
import { TelaDespesasComponent } from './tela-despesas/tela-despesas.component'

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
    path: "tela-renda",
    component: TelaRendaComponent
  },
  {
    path: "tela-despesas",
    component: TelaDespesasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatFormFieldModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
