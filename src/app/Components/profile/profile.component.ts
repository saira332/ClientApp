import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  postText: string ='Posts';
  reviewsText: string ='Reviews';
  settingsText: string ='Settings';

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
  }
  ngOnInit(): void {
  }

}
