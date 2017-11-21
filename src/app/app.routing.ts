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
