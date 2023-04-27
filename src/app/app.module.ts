import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import HeaderComponent from './header/header.component';
import HeroComponent from './hero/hero.component';
import VideoComponent from './video/video.component';
import Pages from './pages/';
import { MapaComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    VideoComponent,
    MapaComponent,
    ...Pages,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
