import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'blog-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
  imports: [DrawerModule, ButtonModule, Ripple, AvatarModule, StyleClass, RouterLink],
})
export class SidenavComponent {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }

  visible: boolean = false;
}
