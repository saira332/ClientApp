import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { notificatio } from 'src/app/models/notification.model';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private repo: Repository, private _router: Router) { }
  notifications: notificatio[];
  redirectToDash():void{
    this._router.navigate(['/dashboard'])
  }

  ngOnInit(): void {
    this.repo.getNotifications().subscribe(res=>{
      console.log(res);
      this.notifications = res['results'];
    console.log(this.notifications);
    })
  }

}
