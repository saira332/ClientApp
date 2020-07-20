import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router,private fb: FormBuilder) { }

  formModel = this.fb.group({
    Email: ['', Validators.email],
    Password: ['', Validators.required]

  });
  onSubmit(){
    
    var data= { 
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Password
    };
    console.log(data);
  }

  
  redirecttoLogin():void{
    alert('clicked');
    this._router.navigate(['/login']);
  }
  redirecttoSignuo():void{
    alert('clicked');
    this._router.navigate(['/signup']);
  }
  redirectToProfile(): void {
    alert('clicked');
    this._router.navigate(['/profile']);
  }
  ngOnInit(): void {
  }

}
