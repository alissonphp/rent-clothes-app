import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';

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
import { UpdadeClientComponent } from './clients/updade-client/updade-client.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { ViewOrderComponent } from './orders/view-order/view-order.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { FrontStoreComponent } from './front-store/front-store.component';
import { BannersComponent } from './banners/banners.component';
import { ListBannersComponent } from './banners/list-banners/list-banners.component';
import { UploadBannersComponent } from './banners/upload-banners/upload-banners.component';
import { UpdateBannerComponent } from './banners/update-banner/update-banner.component';
import { NavHeaderBarComponent } from './front-store/nav-header-bar/nav-header-bar.component';
import { SliderImagesComponent } from './front-store/slider-images/slider-images.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
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
    UploadImagesComponent,
    ItemSizesComponent,
    ItemSizesCreateComponent,
    UpdateItemComponent,
    CreateClientComponent,
    ListClientComponent,
    UpdadeClientComponent,
    ListOrdersComponent,
    ViewOrderComponent,
    ListUsersComponent,
    CreateUserComponent,
    UpdateUserComponent,
    FrontStoreComponent,
    BannersComponent,
    ListBannersComponent,
    UploadBannersComponent,
    UpdateBannerComponent,
    NavHeaderBarComponent,
    SliderImagesComponent
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
    FileUploadModule,
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
