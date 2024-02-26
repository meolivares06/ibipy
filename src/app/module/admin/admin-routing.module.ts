import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutAdminComponent} from './components/layout-admin/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutAdminComponent,
    children: [
      {
        path: 'news',
        loadChildren: () => import('../announcement/announcement.module').then(m => m.AnnouncementModule)
      },
      {
        path: 'songs',
        loadChildren: () => import('../songs/songs.module').then(m => m.SongsModule)
      },
      {
        path: 'meditation',
        loadChildren: () => import('../meditation/meditation.module').then(m => m.MeditationModule)
      }
    ]
  },
  {path: '**', redirectTo: '/static/not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}
