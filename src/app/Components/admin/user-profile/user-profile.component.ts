import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private repo: Repository) { }
   replaceProduct() {         
    let p = this.repo.admin[0];         
    p.name = "Modified Product";         
    p.category = "Modified Category";         
    this.repo.replaceAdmin(p);     
  }
  ngOnInit(): void {
  }

}
