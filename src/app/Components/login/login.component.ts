import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Repository } from 'src/app/models/repository';
import { login } from 'src/app/models/login.model';
import { accepter } from 'src/app/models/accepter.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,private fb: FormBuilder, private repo: Repository) { }
  
  formModel = this.fb.group({
    Email: ['', Validators.email],
    Password: ['', Validators.required],
    type: ['',Validators.required]
  });

  val = Math.floor(1000 + Math.random() * 9000);
  // val = Number(Math.random().toString(36).substr(2, 9))
  
  
  get accepter(): accepter {
            return this.repo.accepter;     
  }
  
  onSubmit(){
    var data= { 
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Password,
      type: this.formModel.value.type
    };
    sessionStorage.setItem('loginId', this.val.toString());
    sessionStorage.setItem('Usertype',data.type);
    this.repo.createLogin(new login(this.val,data.Email,data.Password,data.type),this.val);
    sessionStorage.setItem('uType',data.type);
    alert("loged in");
    console.log(data);
    if(sessionStorage.getItem('userId')){
      if(data.type =="accepter"){
        this._router.navigate(['/profile']);
      }
      else if(data.type =="donor"){
        this._router.navigate(['/donorProfile'])
      }
      else if(data.type =="admin")
      {
        this._router.navigate(['/dashboard']);
      }
      
    }
    
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
