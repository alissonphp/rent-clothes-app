import { Component, OnInit } from '@angular/core';

declare var $: any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dpt-admin/dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'dpt-admin/items', title: 'Produtos',  icon: 'ti-shopping-cart', class: '' },
    { path: 'dpt-admin/banners', title: 'Banners',  icon: 'ti-gallery', class: '' },
    { path: 'dpt-admin/clients', title: 'Clientes',  icon: 'fa fa-users', class: '' },
    { path: 'dpt-admin/orders', title: 'Ordens',  icon: 'ti-view-list-alt', class: '' },
    { path: 'dpt-admin/cashier', title: 'Caixa',  icon: 'ti-money', class: '' },
    { path: 'dpt-admin/users', title: 'Usuários',  icon: 'ti-user', class: '' },
    { path: 'dpt-admin/goals', title: 'Metas',  icon: 'ti-bar-chart', class: '' },
    { path: 'logout', title: 'Sair',  icon: 'ti-close', class: '' }

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

}
