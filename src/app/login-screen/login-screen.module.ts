import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginScreenRoutingModule } from './login-screen-routing.module';
import { LoginScreenComponent } from './login-screen.component';
import { LoginWidgetModule } from '../login-widget/login-widget.module';
import { WelcomeWidgetModule } from '../welcome-widget/welcome-widget.module';


@NgModule({
  declarations: [
    LoginScreenComponent
  ],
  imports: [
    CommonModule,
    LoginScreenRoutingModule,LoginWidgetModule,WelcomeWidgetModule
  ]
})
export class LoginScreenModule { }
