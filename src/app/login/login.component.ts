import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { AuthService } from '../auth.service';
import { User } from '../model/user.model';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  
  users: User[];
  model: Login = { username: "admin", password: "admin123" };
  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  constructor(public userservice: UserService, private formBuilder: FormBuilder,private router: Router, public authService: AuthService) { }
  ngOnInit() {
  
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.users = this.userservice.getUsers();
    this.returnUrl = '/bookstore';
    this.authService.logout();
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  
  login() {

    this.users = this.userservice.getUsers();
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    else{
     // if(this.f.username.value == this.users.find(this.f.username.value) && this.f.password.value == this.model.password){
       console.log(this.users[0].isadmin);
     if(this.f.username.value== this.users[0].username && this.f.password.value==this.users[0].password && this.users[0].isadmin=="0")
     {console.log("Login successful");
        //this.authService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.username.value);
        this.router.navigate([this.returnUrl]);
      }
      else if(this.f.username.value== this.users[1].username && this.f.password.value==this.users[1].password && this.users[1].isadmin=="1")
      {
        
      }
      else{
        this.message = "Please check your username and password";
      }
    }    
}
}