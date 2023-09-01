import {Component, inject} from '@angular/core';
import { OptionMenu, MENU_OPTIONS } from 'src/app/shared/data';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  optionsMenu: Array<OptionMenu & { childs?: OptionMenu[] }> = MENU_OPTIONS;

  public authService = inject(AuthService);
  private router = inject(Router);
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
