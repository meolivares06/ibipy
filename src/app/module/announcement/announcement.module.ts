import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnnouncementRoutingModule} from './announcement-routing.module';
import { AnnouncementComponent } from './announcement/announcement.component';
import {HttpClientModule} from '@angular/common/http';
import {AppFileUploadComponent} from './components/file-upload/file-upload.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PipesModule} from '../../core/pipes/pipes.module';
import {DirectivesModule} from '../../core/directives/directives.module';



@NgModule({
  declarations: [
    AppFileUploadComponent,
    AnnouncementComponent
  ],
  imports: [
    CommonModule,
    AnnouncementRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PipesModule,
    DirectivesModule
  ]
})
export class AnnouncementModule { }
