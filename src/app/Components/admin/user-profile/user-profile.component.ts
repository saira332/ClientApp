import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private repo: Repository) { }
  usertype = sessionStorage.getItem('Usertype');



   replaceProduct() {         
    let p = this.repo.admin[0];         
    p.name = "Modified Product";         
    p.category = "Modified Category";         
    this.repo.replaceAdmin(p);     
  }
  ngOnInit(): void {
    if(this.usertype == "accepter"){
      this.repo.getaccepter(this.repo.uId);
    }
    else if(this.usertype == "donor")
    {
      this.repo.getdonor(this.repo.uId);
    }

  }

}
