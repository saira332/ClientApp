import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _router: Router) { }

  redirectToProfile():void{
    this._router.navigate(['/userProfile'])
  }

  redirectTonotification():void{
    this._router.navigate(['/notification'])
  }
  redirectToDash():void{
    this._router.navigate(['/dashboard'])
  }
  redirectToAccep():void{
    this._router.navigate(['/accepter'])
  }
  redirectToDonor():void{
    this._router.navigate(['/donor'])
  }

  ngOnInit(): void {
  }

}
