import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnnouncementRoutingModule} from './announcement-routing.module';
import { AnnouncementComponent } from './announcement/announcement.component';
import {HttpClientModule} from '@angular/common/http';
import {AppFileUploadComponent} from './components/file-upload/file-upload.component';
import {ImageService} from './services/image.service';



@NgModule({
  declarations: [
    AppFileUploadComponent,
    AnnouncementComponent
  ],
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    HttpClientModule
  ],
  providers: [ImageService]
})
export class AnnouncementModule { }
