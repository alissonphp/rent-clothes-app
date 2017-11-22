import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { FileSelectDirective } from 'ng2-file-upload';

import { RouterModule } from '@angular/router';

import { Ng2Webstorage } from 'ngx-webstorage';
import { ModalModule } from 'ngx-bootstrap';
import { httpFactory } from './support/http.factory';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { DataTablesModule } from 'angular-datatables';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';
import { ClientsComponent } from './clients/clients.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { DptAdminComponent } from './dpt-admin/dpt-admin.component';
import { CategoriesComponent } from './items/categories/categories.component';
import { ListComponent } from './items/list/list.component';
import { CreateCategoryComponent } from './items/categories/create-category/create-category.component';
import { CreateItemsComponent } from './items/create-items/create-items.component';
import { UploadImagesComponent } from './items/upload-images/upload-images.component';
import { ItemSizesComponent } from './items/item-sizes/item-sizes.component';
import { ItemSizesCreateComponent } from './items/item-sizes/item-sizes-create/item-sizes-create.component';
import { UpdateItemComponent } from './items/update-item/update-item.component';
import { CreateClientComponent } from './clients/create-client/create-client.component';
import { ListClientComponent } from './clients/list-client/list-client.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LoginComponent,
    ItemsComponent,
    ClientsComponent,
    OrdersComponent,
    UsersComponent,
    DptAdminComponent,
    CategoriesComponent,
    ListComponent,
    CreateCategoryComponent,
    CreateItemsComponent,
    FileSelectDirective,
    UploadImagesComponent,
    ItemSizesComponent,
    ItemSizesCreateComponent,
    UpdateItemComponent,
    CreateClientComponent,
    ListClientComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    ModalModule.forRoot(),
    Ng2Webstorage.forRoot({
      prefix: 'dmpt',
      caseSensitive: false
    }),
    HttpModule,
    DataTablesModule,
    JsonpModule,
    SidebarModule,
    NavbarModule,
    FormsModule,
    FooterModule,
    FixedPluginModule

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
