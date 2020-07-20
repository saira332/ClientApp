import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

declare var require: any

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
    alert("Donor signup");
    this._router.navigate(['/donorSignup'])
  }
  redirectToAccSignup():void{
    alert("Accepter signup");
    this._router.navigate(['/accepterSignup'])
  }
  redirectTocausesdetail():void{
    alert("Causes Details");
    this._router.navigate(['/causesDetails'])
  }
  redirectTocauses():void{
    alert("Causes");
    this._router.navigate(['/causes'])
  }
  redirectToAdmin():void{
    alert("Causes");
    this._router.navigate(['/dashboard'])
  }

  sendmsg(){
    // const Nexmo = require('nexmo');

    // const nexmo = new Nexmo({
    //   apiKey: '0e42ade6',
    //   apiSecret: 'o3dOVl9rgppdlqSP',
    // });

    // const from = 'Vonage APIs';
    // const to = '923466877005';
    // const text = 'Hello from Vonage SMS API';

    // nexmo.message.sendSms(from, to, text);
  }
  ngOnInit(): void {
  }

}
