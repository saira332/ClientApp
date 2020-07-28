import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/models/post.model';
import { Repository } from 'src/app/models/repository';
import { comment } from 'src/app/models/comment.model';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { pid } from 'process';

@Component({
  selector: 'app-causes-area',
  templateUrl: './causes-area.component.html',
  styleUrls: ['./causes-area.component.css']
})
export class CausesAreaComponent implements OnInit {

  constructor(private _router: Router, private repo: Repository,private fb: FormBuilder) { }
  posts: post[];
  comments: comment[];
  id = Number(sessionStorage.getItem('userId'))
  
  formModel = this.fb.group({
    text: ['', Validators.required],
    pid: []
  })
  onSubmit() {
    var body = {
      text:this.formModel.value.text,
      pid: this.formModel.value.pid
    };
    if(sessionStorage.getItem('uType')=="accepter")
    {
      this.repo.createComment(new comment(null,body.pid,Number(sessionStorage.getItem('userId')),body.text,null, null));
    }
    else if(sessionStorage.getItem('uType') == "donor"){
      this.repo.createComment(new comment(null,body.pid,null,body.text,null, Number(sessionStorage.getItem('userId'))));
    }
    this.formModel.reset();
  }
  

  

  ngOnInit(): void {
    this.repo.getposts().subscribe(res=>{
      console.log(res);
      this.posts = res['results'];
      console.log(this.posts);
    })
    this.repo.getComments().subscribe(res=>{
      this.comments= res['results'];
      console.log(this.comments);
    })
  }

}
