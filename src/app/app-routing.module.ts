import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'login-screen', loadChildren: () => import('./login-screen/login-screen.module').then(m => m.LoginScreenModule) }, 
{ path: 'login-widget', loadChildren: () => import('./login-widget/login-widget.module').then(m => m.LoginWidgetModule) }, 
{ path: 'welcome-widget', loadChildren: () => import('./welcome-widget/welcome-widget.module').then(m => m.WelcomeWidgetModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
{ path: 'list-screen', loadChildren: () => import('./list-screen/list-screen.module').then(m => m.ListScreenModule) },
{ path: 'list-widget', loadChildren: () => import('./list-widget/list-widget.module').then(m => m.ListWidgetModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
