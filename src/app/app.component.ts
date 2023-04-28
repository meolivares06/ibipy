import { Component } from '@angular/core';
import { MENU_OPTIONS } from './shared/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ibipy';
  menuOptions = MENU_OPTIONS;
}
