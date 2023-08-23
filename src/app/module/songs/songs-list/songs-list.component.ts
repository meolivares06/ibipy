import {Component, OnInit} from '@angular/core';
import {SongsService} from '../../shared/songs.service';
import {Observable} from 'rxjs';
import {Song} from '../../shared/data';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {
  songs$!: Observable<Song[]>;

  constructor(private songsService: SongsService) {
  }

  ngOnInit() {
    this.songs$ = this.songsService.getSongs();
  }

  async onDelete(song: Song) {
    const response = await this.songsService.deleteSong(song);
    console.log(response);
  }
}
