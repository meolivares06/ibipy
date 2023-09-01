import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnnouncementRoutingModule} from './announcement-routing.module';
import { AnnouncementComponent } from './announcement/announcement.component';
import {HttpClientModule} from '@angular/common/http';
import {AppFileUploadComponent} from './components/file-upload/file-upload.component';



@NgModule({
  declarations: [
    AppFileUploadComponent,
    AnnouncementComponent
  ],
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    HttpClientModule
  ]
})
export class AnnouncementModule { }
