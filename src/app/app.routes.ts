import { Routes } from '@angular/router';
import { ThisProjectComponent } from './features/this-project/this-project.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { AboutMeComponent } from './features/about-me/about-me.component';

export const routes: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'this-project', component: ThisProjectComponent },
  { path: '**', redirectTo: '' },
];
