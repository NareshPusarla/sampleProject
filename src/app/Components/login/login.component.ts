import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { delay, map, Observable, of } from 'rxjs';
import { UserServiceService } from 'src/app/servie/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginform !: FormGroup;
  loginForm!:FormGroup;
  submitted = false;
  data:any;
  inputType:string = "password";

  constructor(private formBuilder: FormBuilder, private userService:UserServiceService, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email : new FormControl('', {
        validators: [Validators.required, Validators.email],
       asyncValidators : [this.userService.uniqueEmailValidator()],
        updateOn:'blur',
      }),
      password: ['', Validators.required]
    })
    
  }

  showPassword(event:any):void{
    event.target.checked ? this.inputType = "text": this.inputType = "password"; 
  }

  onSubmit(){
    this.submitted = true;
    console.log("valid data", this.loginForm.value);
    if (this.loginForm.valid) {
        console.log("valid data", this.loginForm.value);
        this.data={
          email:this.loginForm.value.email,
          password:this.loginForm.value.password
        }
        this.userService.userLogin(this.data).subscribe((response:any)=>{
          console.log("login response", response)
          localStorage.setItem('token',response.id);
          this.router.navigateByUrl("/home")
        }, error=>{
          console.log(error);
        })
    } else {
      console.log("invalid");
    }
  }
}
