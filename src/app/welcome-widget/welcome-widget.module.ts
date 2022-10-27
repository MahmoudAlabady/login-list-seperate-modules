import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeWidgetRoutingModule } from './welcome-widget-routing.module';
import { WelcomeWidgetComponent } from './welcome-widget.component';


@NgModule({
  declarations: [
    WelcomeWidgetComponent
  ],
  imports: [
    CommonModule,
    WelcomeWidgetRoutingModule
  ],
  exports: [ 
    WelcomeWidgetComponent
   ]
})
export class WelcomeWidgetModule { }
