import { Component, OnInit } from '@angular/core';
import { accepter } from 'src/app/models/accepter.model';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-accepter',
  templateUrl: './accepter.component.html',
  styleUrls: ['./accepter.component.css']
})
export class AccepterComponent implements OnInit {

  constructor(private repo:Repository) { }
  accepters: accepter[];
  ngOnInit(): void {
    this.repo.getaccepeters().subscribe(res=>{
      console.log(res);
      this.accepters = res['results'];
      console.log(this.accepters);
    })
  }

}
