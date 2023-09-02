import {Component, inject, OnInit} from '@angular/core';
import {ImageService} from 'src/app/core/services/image.service';
import {MessageService} from '../../../../core/services/message.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  imageService = inject(ImageService);
  messageService = inject(MessageService);

  ngOnInit() {
    this.imageService.getImage().then();
    // this.textService.getLast();
  }
}
