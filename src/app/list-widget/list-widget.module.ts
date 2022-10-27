import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListWidgetRoutingModule } from './list-widget-routing.module';
import { ListWidgetComponent } from './list-widget.component';


@NgModule({
  declarations: [
    ListWidgetComponent
  ],
  imports: [
    CommonModule,
    ListWidgetRoutingModule
  ],
  exports: [ 
    ListWidgetComponent
   ]
})
export class ListWidgetModule { }
