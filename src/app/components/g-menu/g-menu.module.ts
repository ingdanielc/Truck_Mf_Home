import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GMenuComponent } from './g-menu.component';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { MenubarComponent } from './menubar/menubar.component';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { HttpClientModule } from '@angular/common/http';

export * from './g-menu.component';
export * from './menubar/menubar.component';

@NgModule({
  declarations: [GMenuComponent, MenubarComponent],
  imports: [
    CommonModule,
    SidebarModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    MenuModule,
    ButtonModule,
    OverlayPanelModule,
    HttpClientModule,
  ],
  exports: [GMenuComponent, MenubarComponent, SharedModule],
})
export class GMenuModule {}
