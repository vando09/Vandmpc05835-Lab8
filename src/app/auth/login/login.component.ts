import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/service/api/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }
  onSubmit(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).pipe().subscribe({
        next: this.handleLoginSuccess.bind(this),
        error: this.handleLoginFailed.bind(this)
      })
    }
    // console.log(this.loginForm);
    
  }

  protected handleLoginSuccess(res: any) {
    // console.log(res);
    this.router.navigate(['unit']).then();
  }

  protected handleLoginFailed() { }

}
