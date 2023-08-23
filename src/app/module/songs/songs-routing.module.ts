import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SongFormComponent} from './song-form/song-form.component';
import {SongsListComponent} from './songs-list/songs-list.component';

const routes: Routes = [
  { path: 'songsAdd', component: SongFormComponent},
  { path: 'songsList', component: SongsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SongsRoutingModule { }
