import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import {LayoutRouting} from './layout-routing';
import HeaderComponent from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import MapaComponent from './components/mapa/mapa.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MapaComponent
  ],
  imports: [
    CommonModule,
    LayoutRouting
  ]
})
export class LayoutModule { }
