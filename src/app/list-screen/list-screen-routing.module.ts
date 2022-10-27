import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListScreenComponent } from './list-screen.component';

const routes: Routes = [{ path: '', component: ListScreenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListScreenRoutingModule { }
