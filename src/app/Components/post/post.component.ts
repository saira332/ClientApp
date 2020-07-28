import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Repository } from 'src/app/models/repository';
import { post } from 'src/app/models/post.model';
import { comment } from 'src/app/models/comment.model';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private _router: Router, private repo: Repository,private fb: FormBuilder) { }
  post: post;
  comments: comment[];
  id = Number(sessionStorage.getItem('userId'))
  
  formModel = this.fb.group({
    text: ['', Validators.required]
  })
  onSubmit() {
    var body = {
      text:this.formModel.value.text
    };
    if(sessionStorage.getItem('uType')=="accepter")
    {
      this.repo.createPost(new comment(null,this.post.post_id,Number(sessionStorage.getItem('userId')),body.text,null, null));
    }
    else if(sessionStorage.getItem('uType') == "donor"){
      this.repo.createPost(new comment(null,this.post.post_id,null,body.text,null, Number(sessionStorage.getItem('userId'))));
    }
    this.repo.createComment(new comment(null,null,));
    this.formModel.reset();
    alert("Donor Created");
  }

  ngOnInit(): void {
    this.repo.getpost(this.id).subscribe(res=>{
      this.post = res['results'];
      console.log(this.post);

      this.repo.getComments().subscribe(res=>{
        this.comments= res['results'];
        console.log(this.comments);
      })
    })
  }

}
