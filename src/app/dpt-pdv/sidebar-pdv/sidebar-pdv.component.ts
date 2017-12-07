import { Component, OnInit } from '@angular/core';

declare var $: any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dpt-pdv/dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'dpt-pdv/clients', title: 'Clientes',  icon: 'fa fa-users', class: '' },
    { path: 'dpt-pdv/orders', title: 'Ordens',  icon: 'ti-view-list-alt', class: '' },
    { path: 'dpt-pdv/cashier', title: 'Caixa',  icon: 'ti-money', class: '' },
    { path: 'logout', title: 'Sair',  icon: 'ti-close', class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-pdv',
    templateUrl: 'sidebar-pdv.component.html',
})

export class SidebarPdvComponent implements OnInit {
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
