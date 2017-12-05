import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarSellerComponent } from './sidebar-seller.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SidebarSellerComponent ],
    exports: [ SidebarSellerComponent ]
})

export class SidebarSellerModule {}
