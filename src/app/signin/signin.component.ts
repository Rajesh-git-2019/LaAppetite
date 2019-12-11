import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,Validators} from '@angular/forms'
import {UsersService} from '../service/users.service'
import {MustMatch} from '../helpers/must-match.validator'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // @ViewChild('f',{static:false}) signInForm : NgForm;
  account = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    country: '',
    state: '',
    city: '', 
    zip: ''
  };
  constructor(private userService : UsersService, private router :Router, public fb:FormBuilder) { }

  public signInForm = this.fb.group({
    fName : ['',Validators.required],
    lName :['',Validators.required],
    email : ['', [Validators.required,Validators.email]],
    password :['',Validators.required],
    cnfPassword : ['',Validators.required]
  },{
    validators : MustMatch('password','cnfPassword')
  });
  
  ngOnInit() {
  }

  createAccount(){
    this.account.first_name = this.signInForm.value.fName;
    this.account.last_name = this.signInForm.value.lName;
    this.account.email = this.signInForm.value.email;
    this.account.password = this.signInForm.value.password;

    let existingAccount = false;
    
     for (let i = 0; i < this.userService.users.length; i++) {
       if ( this.signInForm.value.email === this.userService.users[i].email) {
         existingAccount = true;
         alert('account already existing');
         break;
       }
     }

     if (!existingAccount) {
    this.userService.users.push(this.account);
     this.router.navigate(['/']);
     }
      console.log(this.signInForm);
      console.log(this.userService.users)
  }

}
