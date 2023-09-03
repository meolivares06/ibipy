import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropFilesDirective} from './drop-files.directive';
import {PasteFilesDirective} from './paste-files.directive';



@NgModule({
  declarations: [
    DropFilesDirective,
    PasteFilesDirective
  ],
  exports: [
    DropFilesDirective,
    PasteFilesDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
