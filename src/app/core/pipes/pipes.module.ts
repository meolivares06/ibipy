import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LastPipe} from './last.pipe';
import { NullAsArrayPipe } from './null-as-array.pipe';



@NgModule({
  declarations: [
    LastPipe,
    NullAsArrayPipe
  ],
  exports: [
    LastPipe,
    NullAsArrayPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
