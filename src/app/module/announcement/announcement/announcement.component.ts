import {Component, inject, OnInit} from '@angular/core';
import {from, tap} from 'rxjs';
import {ImageService} from '../services/image.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  imageUrl = '';

  private imagesService = inject(ImageService);
  ngOnInit() {
    from(this.imagesService.getImages()).pipe(
      tap(result => {
        console.log(result);
        this.imageUrl = result;
      })
    ).subscribe();
  }
}
