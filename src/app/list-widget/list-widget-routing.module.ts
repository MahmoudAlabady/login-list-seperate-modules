import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListWidgetComponent } from './list-widget.component';

const routes: Routes = [{ path: '', component: ListWidgetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListWidgetRoutingModule { }
