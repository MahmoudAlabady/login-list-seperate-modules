import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeWidgetComponent } from './welcome-widget.component';

const routes: Routes = [{ path: '', component: WelcomeWidgetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeWidgetRoutingModule { }
