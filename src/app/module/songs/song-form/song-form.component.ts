import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SongsService} from '../../../shared/songs.service';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
})
export class SongFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private songsService: SongsService) {
    this.form = fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      youtubeLink: [''],
      letter: ['', Validators.required],
      created: [new Date()],
    })
  }

  ngOnInit(): void {

  }

  async onSubmit() {
    console.log(this.form.value);
    const response = await this.songsService.add(this.form.value);
    console.log(response);
  }

  uid(): string{
    return Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36)
  }
}
