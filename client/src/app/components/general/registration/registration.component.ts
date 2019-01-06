import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { IRegistration } from '../../../interfaces';

import { AuthService } from '../../../services/shared';
import { NotificationService } from '../../../services/shared/notification.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  invalidForm: boolean = false;
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private formBuilder: FormBuilder,
    private authSvc: AuthService,
    private snackBar: NotificationService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      acadamy: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      email: ['', [Validators.required, Validators.email], this.isEmailexist],
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      password: ['', [Validators.required], this.passwordRules],
      address: ['']
    });
  }

  signin = () => {
    // stop here if form is invalid
    this.invalidForm = this.registerForm.invalid;
    if (this.invalidForm) {
      return;
    }

    let org: IRegistration = {
      acadamy: this.registerForm.value.acadamy,
      email:   this.registerForm.value.email,
      name: this.registerForm.value.name,
      password: this.registerForm.value.password,
      address: this.registerForm.value.address
    }
    
    this.authSvc.register(org).subscribe((result) => {
      if (result.data) {
        this.snackBar.notify(result.status);
      }
    }, (err) => {
      console.log(err);
    });
  }

  private validAcadamyName() {
    return this.registerForm.get('acadamy').hasError('required') ? 'Acadamy name is required' :
      this.registerForm.get('acadamy').hasError('minlength') ? 'Minimum 5 characters' :
        this.registerForm.get('acadamy').hasError('maxlength') ? 'Maximum 50 characters' : '';
  }

  private validEmail() {
    return this.registerForm.get('email').hasError('required') ? 'Email is required' :
      this.registerForm.get('email').hasError('email') ? 'Not a valid email' :
        this.registerForm.get('email').hasError('isExist') ? 'This email is already exists' : '';
  }

  private isEmailexist(control) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'isExist': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }

  validName() {
    return this.registerForm.get('name').hasError('required') ? 'Name is required' :
      this.registerForm.get('name').hasError('minlength') ? 'Minimum 5 characters' :
        this.registerForm.get('name').hasError('maxlength') ? 'Minimum 10 characters' : '';
  }

  validPassword() {
    return this.registerForm.get('password').hasError('required') ? 'Password is required' :
      this.registerForm.get('password').hasError('pass') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  passwordRules(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return new Observable(observer => {
      let result = (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'pass': true } : null;
      observer.next(result);
      observer.complete();
    });
  }

  // convenience getter for easy access to form fields
 // get frm() { return this.registerForm.controls; }

}
