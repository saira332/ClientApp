import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accepter-signup',
  templateUrl: './accepter-signup.component.html',
  styleUrls: ['./accepter-signup.component.css']
})
export class AccepterSignupComponent implements OnInit {

  constructor(private _router: Router) { }

  redirecttoLogin():void{
    alert('clicked');
    this._router.navigate(['/login']);
  }
  redirecttoSignup():void{
    alert("clicked");
    this._router.navigate(['/accepterSignup']);
  }

  ngOnInit(): void {
  }

}
