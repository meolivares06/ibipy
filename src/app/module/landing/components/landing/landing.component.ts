import {Component, inject, OnInit} from '@angular/core';
import {ImageService} from 'src/app/core/services/image.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  imageService = inject(ImageService);

  ngOnInit() {
    this.imageService.getImage().then();
  }
}
