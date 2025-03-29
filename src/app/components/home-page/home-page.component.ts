import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'blog-home-page',
  imports: [SidenavComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  standalone: true,
})
export class HomePageComponent {}
