import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import {LayoutRouting} from './layout-routing';
import HeaderComponent from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import MapaComponent from './components/mapa/mapa.component';
import {PipesModule} from "../core/pipes/pipes.module";



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MapaComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    PipesModule,
    CommonModule,
    LayoutRouting
  ]
})
export class LayoutModule { }
