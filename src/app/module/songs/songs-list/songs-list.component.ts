import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SongsService} from '../../../shared/songs.service';
import {Song} from '../../../shared/data';

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
    this.songs$ = this.songsService.loadAll();
  }

  async onDelete(song: Song) {
    const response = await this.songsService.delete(song);
    console.log(response);
  }
}
