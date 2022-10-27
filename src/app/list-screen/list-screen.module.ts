import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListScreenRoutingModule } from './list-screen-routing.module';
import { ListScreenComponent } from './list-screen.component';
import { ListWidgetModule } from '../list-widget/list-widget.module';
import { WelcomeWidgetModule } from '../welcome-widget/welcome-widget.module';


@NgModule({
  declarations: [
    ListScreenComponent
  ],
  imports: [
    CommonModule,
    ListScreenRoutingModule,ListWidgetModule,WelcomeWidgetModule
  ]
})
export class ListScreenModule { }
