import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { AvatarModule } from 'primeng/avatar';
import { Drawer } from 'primeng/drawer';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Menu } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'blog-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
  imports: [
    DrawerModule,
    ButtonModule,
    AvatarModule,
    RouterLink,
    MatIconModule,
    Menu,
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    TranslateModule,
  ],
})
export class SidenavComponent {
  items = [
    {
      items: [
        {
          label: 'about.title',
          icon: 'pi pi-user',
          route: '/about-me',
        },
        {
          label: 'this-project.title',
          icon: 'pi pi-link',
          route: '/this-project',
        },
        {
          label: 'paynch.name',
          icon: 'pi pi-lightbulb',
          route: '/paynch',
        },
      ],
    },
  ];
}
