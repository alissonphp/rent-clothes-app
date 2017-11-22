import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { ClientsComponent } from './clients/clients.component';
import { OrdersComponent } from './orders/orders.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
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

export const AppRoutes: Routes = [
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
                component: ClientsComponent
            },
            {
                path: 'orders',
                component: OrdersComponent
            },
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'notifications',
                component: NotificationsComponent
            },
        ]
    },

]
