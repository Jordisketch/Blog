import { Routes } from '@angular/router';
import { ThisProjectComponent } from './features/this-project/this-project.component';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { PaynchComponent } from './features/paynch/paynch.component';

export const routes: Routes = [
  { path: '', component: AboutMeComponent },
  { path: 'this-project', component: ThisProjectComponent },
  { path: 'paynch', component: PaynchComponent },
  { path: '**', redirectTo: '' },
];
