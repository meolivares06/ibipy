import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingRouting} from './landing-routing';
import {LandingComponent} from './components/landing/landing.component';
import HeroComponent from './components/hero/hero.component';
import PageAboutUsComponent from './pages/about-us/about-us.component';
import PageFeComponent from './pages/fe/fe.component';
import {PipesModule} from '../../core/pipes/pipes.module';


@NgModule({
  declarations: [
    HeroComponent,
    PageAboutUsComponent,
    PageFeComponent,
    LandingComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    LandingRouting,
    PipesModule
  ]
})
export class LandingModule { }
