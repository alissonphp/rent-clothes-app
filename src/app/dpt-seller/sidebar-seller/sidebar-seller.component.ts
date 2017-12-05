import { Component, OnInit } from '@angular/core';

declare var $: any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dpt-seller/consult', title: 'Consultar Item',  icon: 'fa fa-search', class: '' },
    { path: 'dpt-seller/goals', title: 'Metas',  icon: 'fa fa-line-chart', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-seller',
    templateUrl: 'sidebar-seller.component.html',
})

export class SidebarSellerComponent implements OnInit {
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
