import { Component, OnInit } from '@angular/core';
import { accepter } from 'src/app/models/accepter.model';
import { Router } from '@angular/router';
import { Repository } from 'src/app/models/repository';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-accepetr-edit-profile',
  templateUrl: './accepetr-edit-profile.component.html',
  styleUrls: ['./accepetr-edit-profile.component.css']
})
export class AccepetrEditProfileComponent implements OnInit {

  constructor(private _router: Router, private repo: Repository,private fb: FormBuilder) { }
  i;
id= Number(sessionStorage.getItem('userId'));
accepter: accepter;

  formModel = this.fb.group({
    Name: [this.accepter.accepter_name, Validators.required],
    FatherName: [this.accepter.father_name, Validators.required],
    Cnic: [this.accepter.CNIC, [Validators.required, Validators.minLength(13),Validators.maxLength(13),Validators.pattern("^[0-9]*$")]],
    Dob: [this.accepter.DOB, Validators.required],
    FamilyMembers: [this.accepter.family_members,[Validators.required,Validators.pattern("^[0-9]*$")]],
    MaritalStatus: [this.accepter.marital_status,Validators.required],
    Salary: [this.accepter.salary,[Validators.required,Validators.pattern("^[0-9]*$")]],
    Gender: [this.accepter.gender, Validators.required],
    Occupation: [this.accepter.occupation, Validators.required],
    Country: [this.accepter.country, Validators.required],
    City: [this.accepter.city, Validators.required],
    State: [this.accepter.state, Validators.required],
    Address: [this.accepter.address, Validators.required],
    Zip: [this.accepter.zip_code, [Validators.required,Validators.pattern("^[0-9]*$")]],
    Email: [this.accepter.email, Validators.email],
    Passwords: this.fb.group({
      Password: [this.accepter.password, [Validators.required, Validators.minLength(8)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords }),
    ContactNo: [this.accepter.contact_no, [Validators.required, Validators.minLength(11),Validators.maxLength(11),Validators.pattern("^[0-9]*$")]],
   
  });
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


    
    console.log(body);
    this.repo.replaceAccepter(new accepter(null,body.Name,body.FatherName,body.Email,body.Passwords,body.ContactNo,
      body.Cnic,body.Dob,body.ContactNo,body.City,body.State,body.Address,body.Zip,body.Gender,
      body.Occupation,Number(body.Zip),body.MaritalStatus,Number(body.FamilyMembers),this.val,"not active",null));

    alert("accepter Created");
  }


  ngOnInit(): void {
    this.repo.getaccepter(this.id).subscribe(res=>{
      this.accepter = res['results'];
    })
  }

}
