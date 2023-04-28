import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import HeaderComponent from './header/header.component';
import HeroComponent from './hero/hero.component';
import VideoComponent from './video/video.component';
import Pages from './pages/';
import Components from './components';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    VideoComponent,
    ...Components,
    ...Pages,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
