import {Component, inject, OnInit} from '@angular/core';
import {from, tap} from 'rxjs';
import {ImageService} from '../services/image.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  service = inject(ImageService);

  ngOnInit() {
    this.service.getImage().then();
  }
}
