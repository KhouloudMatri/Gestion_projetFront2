import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './admin/login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {

    path: 'login',
    component : LoginComponent,
    
  },
   
  {
      path: 'admin',component: AdminLayoutComponent,
      loadChildren: () => import('./admin/layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  },
  
  { path: 'user',component:UserComponent, loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
  ,{
    path: '**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
