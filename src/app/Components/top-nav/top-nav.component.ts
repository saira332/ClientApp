import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) { }

  redirectToAbout(): void {
    alert("clicked");
    this._router.navigate(['/about']);
  }
  edirectToHome(): void {
    alert("clicked");
    this._router.navigate(['/home']);
  }
  redirectToProfile(): void {
    alert("clicked");
    this._router.navigate(['/profile']);
  }
  redirectToSignupD():void{
    alert("signup");
    this._router.navigate(['/donorSignup'])
  }
  redirectTocausesdetail():void{
    alert("Causes Details");
    this._router.navigate(['/causesDetails'])
  }
  redirectTocauses():void{
    alert("Causes");
    this._router.navigate(['/causes'])
  }
  ngOnInit(): void {
  }

}
