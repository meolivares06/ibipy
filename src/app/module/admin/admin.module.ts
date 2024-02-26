import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutAdminComponent} from './components/layout-admin/layout.component';
import {AdminRoutingModule} from './admin-routing.module';
import {LayoutModule} from '../../layout/layout.module';


@NgModule({
  declarations: [
    LayoutAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule
  ]
})
export class AdminModule { }
