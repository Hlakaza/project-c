import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './guards/index';
import { MasterComponent } from './components/master/master.component';
import { HomeDashBoardComponent } from './home-dash-board/home-dash-board.component';

const appRoutes: Routes = [
    { path: '', component: MasterComponent },
    { path: 'home', component: HomeDashBoardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);
