import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-view-accepter',
  templateUrl: './view-accepter.component.html',
  styleUrls: ['./view-accepter.component.css']
})
export class ViewAccepterComponent implements OnInit {

  constructor(private repo: Repository) { }

  get accepter(){
    this.repo.getaccepter(20);
    return this.repo.accepter;
  }
  verify(){
    alert("verified");
  }
  ngOnInit(): void {
  }

}
