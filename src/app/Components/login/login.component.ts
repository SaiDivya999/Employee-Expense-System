import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Entities/login';
import { LoginService } from 'src/app/Services/login.service';

declare var toastr:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor(private router: Router,private LoginService:LoginService) { }

  login : Login=new Login();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  usersaveform=new FormGroup({
    userName:new FormControl('',[Validators.required]),
   password:new FormControl('',[Validators.required]), 
    role:new FormControl('',[Validators.required]), 

  });

  saveUser(saveUser){
    this.login=new Login();   
    this.login.userName=this.UserName.value;
    this.login.password=this.Password.value;
    this.login.role=this.Role.value;
    this.submitted = true;
    this.save();
  
  }

  save() {
    if(this.login.userName=='admin' && this.login.password=='admin'){
     this.LoginService.username='admin';
     toastr.success("SuccessFully loggedIn",'Login Success');
     //this.LoginService.setUserLoggedIn();
     console.log(this.submitted)
     this.router.navigate(['home']);
    }else{
     this.LoginService.signin(this.login.userName,this.login.password)
     .subscribe((data) =>{
       console.log(data)
       toastr.success("SuccessFully loggedIn",'Login Success');
       //this.LoginService.setUserLoggedIn();
       console.log(this.submitted)
       this.router.navigate(['home']);
     } , error => {
         toastr.error("Invalid credentials",'Login Failure');
         this.router.navigate(['login']);
     });
    }
   
 }

 get UserName(){
   return this.usersaveform.get('userName');
 }

 get Password(){
   return this.usersaveform.get('password');
 }
 get Role(){
  return this.usersaveform.get('role');
}


}
