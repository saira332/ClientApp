import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-become-volunter',
  templateUrl: './become-volunter.component.html',
  styleUrls: ['./become-volunter.component.css']
})
export class BecomeVolunterComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) { }

  redirectToLogin(): void {
    alert("clicked");
    this._router.navigate(['/login']);
  }
  ngOnInit(): void {
  }

}
