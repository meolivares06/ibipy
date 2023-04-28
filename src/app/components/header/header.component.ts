import { Component } from '@angular/core';
import { OptionMenu, MENU_OPTIONS } from 'src/app/shared/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  optionsMenu: Array<OptionMenu & { childs?: OptionMenu[] }> = MENU_OPTIONS;
}
