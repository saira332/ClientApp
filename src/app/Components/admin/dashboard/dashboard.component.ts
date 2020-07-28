import { Component, OnInit } from '@angular/core';
import { accepter } from 'src/app/models/accepter.model';
import { Repository } from 'src/app/models/repository';
import { donor } from 'src/app/models/donor.model';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private repo:Repository) { }
  accepters: accepter[];
  donors: donor[];
  
  ngOnInit(): void {
    this.repo.getaccepeters().subscribe(res=>{
      console.log(res);
      this.accepters = res['results'];
      console.log(this.accepters);
    })
    
    this.repo.getdonors().subscribe(res=>{
      console.log(res);
      this.donors = res['results'];
    console.log(this.donors);
    })
  }

}
