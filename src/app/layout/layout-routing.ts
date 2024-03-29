import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: 'landing',
        loadChildren: () => import('../module/landing/landing.module').then(m => m.LandingModule)
      },
      {path: '', redirectTo: '/landing', pathMatch: 'full'},
      {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouting {
}
