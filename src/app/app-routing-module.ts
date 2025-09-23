import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ProfessorComponent } from './professor-component/professor-component';
import { DiciplinasComponent } from './diciplinas-component/diciplinas-component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Professores', component:ProfessorComponent},
  {path:'Disciplinas', component:DiciplinasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
