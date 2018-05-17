import { Routes, RouterModule } from '@angular/router';

import{AppComponent} from'./app.component';
import{HomeComponent}from'./Home/home.component';

const APP_ROUTES = [
  {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
  },
  {
          path: 'home',
          component: HomeComponent        
  }

  ];


export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES);







