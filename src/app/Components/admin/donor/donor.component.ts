import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';
import { donor } from 'src/app/models/donor.model';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {
  constructor(private repo:Repository) { }
  donors: donor[];
  ngOnInit(): void {
    this.repo.getdonors().subscribe(res=>{
      console.log(res);
      this.donors = res['results'];
      console.log(this.donors);
    })
  }

}
