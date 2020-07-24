import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/models/post.model';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-causes-area',
  templateUrl: './causes-area.component.html',
  styleUrls: ['./causes-area.component.css']
})
export class CausesAreaComponent implements OnInit {

  constructor(private repo: Repository) { }

  get post(): post {
    // this.repo.getpost(Number(localStorage.getItem('userId')));
    this.repo.getpost(4);
    return this.repo.post;  
  }

  ngOnInit(): void {
  }

}
