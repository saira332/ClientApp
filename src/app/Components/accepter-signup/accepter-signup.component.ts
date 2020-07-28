import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { accepter } from 'src/app/models/accepter.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Repository } from 'src/app/models/repository';

const formData = new FormData();

@Component({
  selector: 'app-accepter-signup',
  templateUrl: './accepter-signup.component.html',
  styleUrls: ['./accepter-signup.component.css']
})
export class AccepterSignupComponent implements OnInit {

  constructor(private _router: Router, private repo: Repository,private fb: FormBuilder) { }
  i;

  formModel = this.fb.group({
    Name: ['', Validators.required],
    FatherName: ['', Validators.required],
    Cnic: ['', [Validators.required, Validators.minLength(13),Validators.maxLength(13),Validators.pattern("^[0-9]*$")]],
    Dob: ['', Validators.required],
    FamilyMembers: ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
    MaritalStatus: ['',Validators.required],
    Salary: ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
    Gender: ['', Validators.required],
    Occupation: ['', Validators.required],
    Country: ['', Validators.required],
    City: ['', Validators.required],
    State: ['', Validators.required],
    Address: ['', Validators.required],
    Zip: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
    Email: ['', Validators.email],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(8)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords }),
    ContactNo: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(11),Validators.pattern("^[0-9]*$")]],
   
  });
  myFiles:string [] = [];
  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }
    
 
     
  onFileChange(event) {
   
        for (var i = 0; i < event.target.files.length; i++) { 
            this.myFiles.push(event.target.files[i]);
        }
  }

  public uploadFile = (files: string | any[]) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    formData.append('file', fileToUpload, fileToUpload.name);
  }

  val = Math.floor(1000 + Math.random() * 9000);
  onSubmit() {
    var body = {
      Name:this.formModel.value.Name,
      FatherName: this.formModel.value.FatherName,
      Cnic: this.formModel.value.Cnic,
      Dob: this.formModel.value.Dob,
      FamilyMembers: this.formModel.value.FamilyMembers,
      MaritalStatus: this.formModel.value.MaritalStatus,
      Salary: this.formModel.value.Salary,
      Gender: this.formModel.value.Gender,
      Occupation: this.formModel.value.Occupation,
      Country: this.formModel.value.Country,
      City: this.formModel.value.City,
      State: this.formModel.value.State,
      Address: this.formModel.value.Address,
      Email: this.formModel.value.Email,
      Passwords: this.formModel.value.Passwords.Password,
      ContactNo: this.formModel.value.ContactNo,
      Zip: this.formModel.value.Zip,
      fname:this.formModel.value.fname,
      file: this.formModel.value.fname
    };

    for (var i = 0; i < this.myFiles.length; i++) { 
      formData.append("file[]", this.myFiles[i]);
    }

    // this.http.post('http://localhost:8001/upload.php', formData)
    //   .subscribe(res => {
    //     console.log(res);
    //     alert('Uploaded Successfully.');

    
    console.log(body);
    this.repo.createAccepter(new accepter(null,body.Name,body.FatherName,body.Email,body.Passwords,body.ContactNo,
      body.Cnic,body.Dob,body.ContactNo,body.City,body.State,body.Address,body.Zip,body.Gender,
      body.Occupation,Number(body.Zip),body.MaritalStatus,Number(body.FamilyMembers),this.val,"not active",null),formData);
    // this.formModel.reset();
    alert("accepter Created");
        // this.toastr.success('New user created!', 'Registration successful.');
  }

  


  redirecttoLogin():void{
    alert('clicked');
    this._router.navigate(['/login']);
  }
  redirecttoSignup():void{
    alert("clicked");
    this._router.navigate(['/signup']);
  }


  ngOnInit(): void {
  }

}
