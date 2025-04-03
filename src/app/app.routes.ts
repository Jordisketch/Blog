import { Routes } from '@angular/router';
import { ThisProjectComponent } from './features/this-project/this-project.component';
import { HomePageComponent } from './features/home-page/home-page.component';

export const routes: Routes = [
  { path: 'this-project', component: ThisProjectComponent },
  { path: '**', component: HomePageComponent },
];
