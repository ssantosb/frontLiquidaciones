import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {HomeComponent} from './components/home/home.component'
import {ContratistaListComponent} from './components/contratista-list/contratista-list.component'
import {ContratistaUpdateComponent} from './components/contratista-update/contratista-update.component'
import {ContratistaDetailComponent} from './components/contratista-detail/contratista-detail.component'
import {ContratistaCreateComponent} from './components/contratista-create/contratista-create.component'
import { PioneroActualizarComponent } from './components/pionero-actualizar/pionero-actualizar.component';




const routes: Routes = [
  {path: 'login',  component: LoginComponent},
  {path: '',  component: HomeComponent},
  {path: 'contratistas', component:ContratistaListComponent},
  {path: 'contratistas/:id', component: ContratistaDetailComponent},
  {path: 'contratistas/:id/actualizar', component: ContratistaUpdateComponent}, 
  {path: 'registrarContratista', component: ContratistaCreateComponent},
  {path: 'pioneroActualizar', component: PioneroActualizarComponent} //N
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
