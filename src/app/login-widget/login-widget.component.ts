import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login-widget',
  templateUrl: './login-widget.component.html',
  styleUrls: ['./login-widget.component.css']
})
export class LoginWidgetComponent implements OnInit,OnDestroy {


  constructor(private formBuilder:FormBuilder,private userService:UserServiceService) { }

  loginForm=this.formBuilder.group(
    {
      email:[''], 
      password:[''],
  
    }
  )


  login(credentials:any){
    
    this.userService.setLoginFlag(credentials.email,credentials.password);
    
    
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    console.log('login Widget Destroyed')
}
}
