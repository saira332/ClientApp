import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Repository } from 'src/app/models/repository';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { post } from 'src/app/models/post.model';

const formData = new FormData();

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  time: Date;

  constructor(private _router: Router, private repo: Repository,private fb: FormBuilder) { 
    setInterval( ()=> this.time = new Date(), 1000);
  }

  formModel = this.fb.group({
    Title: ['', Validators.required],
    Category: ['',Validators.required],
    Decription: [''],
    Time: ["",Validators.required],
    TragetAmount: ['', Validators.required],
    ReceivedAmount: [''],
    Urgent: ['', Validators.required],
    AccepterId: [''],
    DonorId: ['']

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  
  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    formData.append('file', fileToUpload, fileToUpload.name);
  }
  onItemChange(value){
    console.log(" Value is : ", value );
 }

  onSubmit() {
    var body = {
      Title: this.formModel.value.Title,
      Category: this.formModel.value.Category,
      Description: this.formModel.value.Decription,
      TragetAmount: this.formModel.value.TragetAmount,
      ReceivedAmount: 0,
      Time: this.formModel.value.Time,
      Shares: 0,
      Urgent: this.formModel.value.Urgent,
      AccepterId: 0,
      DonorId: 0
    };
    if(sessionStorage.getItem('uType')=="accepter")
    {
      this.repo.createPost(new post(null,body.Title,body.Category,body.Description,Number(body.TragetAmount),
      Number(body.ReceivedAmount),body.Time,Number(body.Shares),body.Urgent,Number(sessionStorage.getItem('userId')),null));
    }
    else if(sessionStorage.getItem('uType') == "donor"){
      this.repo.createPost(new post(null,body.Title,body.Category,body.Description,Number(body.TragetAmount),
      Number(body.ReceivedAmount),body.Time,Number(body.Shares),body.Urgent,null,Number(sessionStorage.getItem('userId'))));
    }
   
    console.log(body);

    this.formModel.reset();
    alert("post uploaded");
  }

  ngOnInit(): void {
  }

}
