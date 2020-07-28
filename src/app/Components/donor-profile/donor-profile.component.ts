import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { accepter } from 'src/app/models/accepter.model';
import { Repository } from 'src/app/models/repository';
import { donor } from 'src/app/models/donor.model';

@Component({
  selector: 'app-donor-profile',
  templateUrl: './donor-profile.component.html',
  styleUrls: ['./donor-profile.component.css']
})
export class DonorProfileComponent implements OnInit {

  donor : donor;
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
    this._router.navigate(['/editDonor']);
  }

  createPost():void{
    alert("clicked");
    this._router.navigate(['/createPost']);
  }

  

  ngOnInit(): void {
    console.log(this.id);
    if(sessionStorage.getItem('userId'))
    {
      this.repo.getdonor(this.id).subscribe(res=>{
        console.log(res);
        this.donor = res['results'];
        console.log(this.donor);
      })
    }
    else{
      this._router.navigate(['login']);
    }
    
  }


}
