import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CrudComponent} from './components/crud/crud.component';

const routes: Routes = [
  // layout component: route -> devocional
  { path: '', component: HomeComponent },
  {path: 'admin', component: CrudComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeditationRoutingModule { }
