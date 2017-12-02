import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';

export const PagesRoutes: Routes = [{
    path: '',
    children: [ {
        path: 'Entrar',
        component: LoginComponent
    },{
        path: 'Bloquear',
        component: LockComponent
    },{
        path: 'Cadastro',
        component: RegisterComponent
    }]
}];
