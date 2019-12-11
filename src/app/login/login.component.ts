import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms'
import {Router} from '@angular/router'
import {UsersService} from '../service/users.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public loginForm : FormGroup;
  validCreds : boolean = true;
  constructor(private userService : UsersService, private router : Router, public fb :FormBuilder) { }

  public loginForm  = this.fb.group({
    email : ['',[Validators.required, Validators.email]],
    password : ['',Validators.required]
  });
  
  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   'email' : new FormControl(null, [Validators.required, Validators.email]),
    //   'password' : new FormControl(null, Validators.required),
    // });
  }
  // get f() {
  //   console.log(this.loginForm);
  //    return this.loginForm.controls; }

  login(){
    // console.log(this.loginForm);
    for(let user of this.userService.users)
    {
      if(user.email==this.loginForm.value.email && user.password == this.loginForm.value.password){
        sessionStorage.session = true;
        sessionStorage.setItem("name", user.first_name);
        sessionStorage.setItem("email", user.email);
          this.router.navigate(['/deliveryAddress']);
      }
      else{
        this.validCreds=false;
      }
    }
  }

}
