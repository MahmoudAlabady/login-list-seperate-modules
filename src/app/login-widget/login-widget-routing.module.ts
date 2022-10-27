import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginWidgetComponent } from './login-widget.component';

const routes: Routes = [{ path: '', component: LoginWidgetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginWidgetRoutingModule { }
