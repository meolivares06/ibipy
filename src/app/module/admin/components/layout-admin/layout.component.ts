import { Component } from '@angular/core';
import {MENU_OPTIONS} from '../../../../shared/data';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutAdminComponent {

  protected readonly MENU_OPTIONS = MENU_OPTIONS;
}
