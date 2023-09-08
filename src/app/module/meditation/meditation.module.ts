import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeditationComponent } from './meditation/meditation.component';
import {MeditationRoutingModule} from './meditation-routing.module';
import {CrudComponent} from './components/crud/crud.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    MeditationComponent,
    CrudComponent
  ],
  imports: [
    CommonModule,
    MeditationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MeditationModule { }
