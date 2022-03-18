import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup
  submitted = false;
  data:any;

  constructor(private formBuilder: FormBuilder) { }

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

    } else {
      console.log("invalid");
    }
  }
}
