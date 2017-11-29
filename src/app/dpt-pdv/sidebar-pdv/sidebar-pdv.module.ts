import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarPdvComponent } from './sidebar-pdv.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SidebarPdvComponent ],
    exports: [ SidebarPdvComponent ]
})

export class SidebarPdvModule {}
