import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Repository } from "../../models/repository";
import { accepter } from 'src/app/models/accepter.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  accepter : accepter
  constructor(private _router: Router, private repo: Repository) { }
  
  postText: string ='posts';
  reviewsText: string ='reviews';
  settingsText: string ='settings';


  id = Number(sessionStorage.getItem('userId'))
  toogle1(): void {
    if(this.postText === 'Posts')
    {
      this.reviewsText = 'review';
      this.settingsText ='setting';
    }
    else{
      this.postText = 'Posts';
      this.reviewsText = 'review';
      this.settingsText ='setting';
    }
  }
  toogle2(): void {
    if(this.reviewsText === 'Reviews')
    {
      this.postText = 'post';
      this.settingsText ='settings';
    }
    else{
      this.reviewsText = 'Reviews';
      this.postText = 'post';
      this.settingsText ='settings';
    }
  }
  toogle3(): void {
    if(this.settingsText === 'Settings')
    {
      this.reviewsText = 'reviews';
      this.postText ='post';
    }
    else{
      this.settingsText = 'Settings';
      this.reviewsText = 'reviews';
      this.postText ='post';
    }
    this._router.navigate(['/editAccepter']);
  }

  createPost():void{
    alert("clicked");
    this._router.navigate(['/createPost']);
  }

  

  ngOnInit(): void {
    console.log(this.id);
    if(sessionStorage.getItem('userId'))
    {
      this.repo.getaccepter(this.id).subscribe(res=>{
        console.log(res);
        this.accepter = res['results'];
        console.log(this.accepter);
      })
    }
    else{
      this._router.navigate(['login']);
      
    }
    
  }

}
