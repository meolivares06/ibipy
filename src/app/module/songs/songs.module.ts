import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongFormComponent } from './song-form/song-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SongsRoutingModule} from './songs-routing.module';
import { SongsListComponent } from './songs-list/songs-list.component';



@NgModule({
  declarations: [
    SongFormComponent,
    SongsListComponent
  ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      SongsRoutingModule
    ]
})
export class SongsModule { }
