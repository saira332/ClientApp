import { Component, OnInit } from '@angular/core';
import { accepter } from 'src/app/models/accepter.model';
import { Repository } from 'src/app/models/repository';

function hello() {
  alert('Hello!!!');
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private repo:Repository) { }

  get accepters(): accepter[]{
      this.repo.getaccepeters();
        return this.repo.accepters;
      }
  ngOnInit(): void {
  }

}
