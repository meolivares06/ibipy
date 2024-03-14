import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingRouting} from './landing-routing';
import {LandingComponent} from './components/landing/landing.component';
import HeroComponent from './components/hero/hero.component';
import PageAboutUsComponent from './pages/about-us/about-us.component';
import PageFeComponent from './pages/fe/fe.component';
import {PipesModule} from '../../core/pipes/pipes.module';
import VideoComponent from "./components/video/video.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {NewsComponent} from "./components/news/news.component";


@NgModule({
  declarations: [
    PageAboutUsComponent,
    PageFeComponent,
    LandingComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    LandingRouting,
    VideoComponent,
    WelcomeComponent,
    HeroComponent,
    NewsComponent
  ]
})
export class LandingModule { }
