import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SongFormComponent} from './song-form/song-form.component';
import {SongsListComponent} from './songs-list/songs-list.component';

const routes: Routes = [
  { path: 'add', component: SongFormComponent},
  { path: '', component: SongsListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongsRoutingModule { }
