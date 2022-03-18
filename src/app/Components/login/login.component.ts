import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from 'src/app/servie/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup
  submitted = false;
  data:any;

  constructor(private formBuilder: FormBuilder, private userService:UserServiceService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true;
    if (this.loginForm.valid) {
        console.log("valid data", this.loginForm.value);
        this.data={
          email:this.loginForm.value.email,
          password:this.loginForm.value.password
        }
        this.userService.userLogin(this.data).subscribe((response:any)=>{
          console.log(response)
          localStorage.setItem('token',response.id);
          this.snackBar.open('user login successful','dismiss', {duration:3000});
          
        }, error=>{
          console.log(error);
        })
    } else {
      console.log("invalid");
    }
  }
}
