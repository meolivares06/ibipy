import {Component, inject, OnInit} from '@angular/core';
import {ImageService} from "../../../../core/services/image.service";
import {MessageService} from "../../../../core/services/message.service";
import {PipesModule} from "../../../../core/pipes/pipes.module";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    AsyncPipe,
    PipesModule
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent  implements OnInit {
  imageService = inject(ImageService);
  messageService = inject(MessageService);

  ngOnInit() {
    this.imageService.getImage().then();
    // this.textService.getLast();
  }
}
