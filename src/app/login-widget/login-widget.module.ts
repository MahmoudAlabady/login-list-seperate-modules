import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginWidgetRoutingModule } from './login-widget-routing.module';
import { LoginWidgetComponent } from './login-widget.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginWidgetComponent
  ],
  imports: [
    CommonModule,
    LoginWidgetRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ 
    LoginWidgetComponent,
   ]
})
export class LoginWidgetModule { }
