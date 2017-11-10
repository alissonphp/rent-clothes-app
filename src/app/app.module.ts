import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { RouterModule } from '@angular/router';

import { Ng2Webstorage } from 'ngx-webstorage';
import { httpFactory } from './support/http.factory';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';
import { ClientsComponent } from './clients/clients.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { DptAdminComponent } from './dpt-admin/dpt-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LoginComponent,
    ItemsComponent,
    ClientsComponent,
    OrdersComponent,
    UsersComponent,
    DptAdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    Ng2Webstorage.forRoot({
      prefix: 'dmpt',
      caseSensitive: false
    }),
    HttpModule,
    JsonpModule,
    SidebarModule,
    NavbarModule,
    FormsModule,
    FooterModule,
    FixedPluginModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'})

  ],
  providers: [
    {
      provide: Http,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
