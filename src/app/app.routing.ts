import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';
import { DptAdminComponent } from './dpt-admin/dpt-admin.component';
import { CategoriesComponent } from 'app/items/categories/categories.component';
import { ListComponent } from 'app/items/list/list.component';
import { CreateCategoryComponent } from 'app/items/categories/create-category/create-category.component';
import { CreateItemsComponent } from './items/create-items/create-items.component';
import { UploadImagesComponent } from 'app/items/upload-images/upload-images.component';
import { ItemSizesComponent } from 'app/items/item-sizes/item-sizes.component';
import { ItemSizesCreateComponent } from 'app/items/item-sizes/item-sizes-create/item-sizes-create.component';
import { UpdateItemComponent } from 'app/items/update-item/update-item.component';
import { ListClientComponent } from 'app/clients/list-client/list-client.component';
import { CreateClientComponent } from 'app/clients/create-client/create-client.component';
import { UpdadeClientComponent } from 'app/clients/updade-client/updade-client.component';
import { ListOrdersComponent } from 'app/orders/list-orders/list-orders.component';
import { ViewOrderComponent } from 'app/orders/view-order/view-order.component';
import { ListUsersComponent } from 'app/users/list-users/list-users.component';
import { UpdateUserComponent } from 'app/users/update-user/update-user.component';
import { CreateUserComponent } from 'app/users/create-user/create-user.component';
import { FrontStoreComponent } from 'app/front-store/front-store.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: FrontStoreComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dpt-admin',
        component: DptAdminComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'items',
                component: ItemsComponent,
                children: [
                    {
                        path: '',
                        component: ListComponent
                    },
                    {
                        path: 'create',
                        component: CreateItemsComponent
                    },
                    {
                        path: 'update/:id',
                        component: UpdateItemComponent
                    },
                    {
                        path: 'images/:id',
                        component: UploadImagesComponent
                    },
                    {
                        path: 'sizes/:id',
                        component: ItemSizesComponent
                    },
                    {
                        path: 'sizes/create/:id',
                        component: ItemSizesCreateComponent
                    },
                    {
                        path: 'categories',
                        component: CategoriesComponent
                    },
                    {
                        path: 'categories/create',
                        component: CreateCategoryComponent
                    }
                ]
            },
            {
                path: 'clients',
                component: ClientsComponent,
                children: [
                    {
                        path: '',
                        component: ListClientComponent
                    },
                    {
                        path: 'create',
                        component: CreateClientComponent
                    },
                    {
                        path: 'update/:id',
                        component: UpdadeClientComponent
                    }
                ]
            },
            {
                path: 'orders',
                component: OrdersComponent,
                children: [
                    {
                        path: '',
                        component: ListOrdersComponent
                    },
                    {
                        path: 'view/:id',
                        component: ViewOrderComponent
                    }
                ]
            },
            {
                path: 'users',
                component: UsersComponent,
                children: [
                    {
                        path: '',
                        component: ListUsersComponent
                    },
                    {
                        path: 'create',
                        component: CreateUserComponent
                    },
                    {
                        path: 'update/:id',
                        component: UpdateUserComponent
                    }
                ]
            },
        ]
    },

]
