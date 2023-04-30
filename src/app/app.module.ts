import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import Pages from './pages/';
import Components from './components';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {SongsModule} from './songs/songs.module';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [AppComponent, ...Components, ...Pages, LandingComponent],
  imports: [BrowserModule, AppRoutingModule, SongsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
