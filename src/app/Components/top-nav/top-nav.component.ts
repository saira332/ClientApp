import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare var require: any

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  login: string ="Login";
  toogle1(): void {
    if(sessionStorage.getItem('userId'))
    {
      this.login = 'Logout';
    }
    else{
      this.login = 'Login';
    }
    if(this.login == "Logout")
    {
      sessionStorage.clear();
    }
    else{
      this.redirecttoLogin();
    }
  }
  
  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) { }

  redirectToAbout(): void {
    this._router.navigate(['/about']);
  }
  edirectToHome(): void {
    this._router.navigate(['/home']);
  }
  redirectToProfile(): void {
    this._router.navigate(['/profile']);
  }
  redirectToSignupD():void{
    this._router.navigate(['/donorSignup'])
  }
  redirectToAccSignup():void{
    this._router.navigate(['/accepterSignup'])
  }
  redirecttoLogin(){
    this._router.navigate(['/login'])
  }
  redirectTocauses():void{
    this._router.navigate(['/causes'])
  }
  redirectToAdmin():void{
    this._router.navigate(['/dashboard'])
  }
  redirectToCal(){
    this._router.navigate(['/calculator'])
  }
  ngOnInit(): void {
  }

}
