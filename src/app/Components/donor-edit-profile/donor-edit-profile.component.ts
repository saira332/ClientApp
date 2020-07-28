import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Repository } from 'src/app/models/repository';
import { donor } from 'src/app/models/donor.model';

@Component({
  selector: 'app-donor-edit-profile',
  templateUrl: './donor-edit-profile.component.html',
  styleUrls: ['./donor-edit-profile.component.css']
})
export class DonorEditProfileComponent implements OnInit {

  constructor(private _router: Router, private repo: Repository,private fb: FormBuilder) { }

  id: number = Number(sessionStorage.getItem('userId'));
  donor: donor;


  formModel = this.fb.group({
    Name: [this.donor.donor_name, Validators.required],
    Cnic: [this.donor.CNIC, [Validators.required, Validators.minLength(13),Validators.maxLength(13),Validators.pattern("^[0-9]*$")]],
    Dob: [this.donor.DOB, Validators.required],
    Gender: [this.donor.gender, Validators.required],
    Occupation: [this.donor.occupation, Validators.required],
    Country: [this.donor.country, Validators.required],
    City: [this.donor.city, Validators.required],
    State: [this.donor.state, Validators.required],
    Address: [this.donor.address, Validators.required],
    Zip: [this.donor.zip_code, [Validators.required,Validators.pattern("^[0-9]*$")]],
    Email: [this.donor.email,, Validators.email],
    Passwords: this.fb.group({
      Password: [this.donor.password, [Validators.required, Validators.minLength(8)]],
      ConfirmPassword: [this.donor.donor_name, Validators.required]
    }, { validator: this.comparePasswords }),
    ContactNo: [this.donor.contact_no, [Validators.required, Validators.minLength(11),Validators.maxLength(11),Validators.pattern("^[0-9]*$")]]

  });

  val = Math.floor(1000 + Math.random() * 9000);

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  

  onSubmit() {
    var body = {
      Name:this.formModel.value.Name,
      Cnic: this.formModel.value.Cnic,
      Dob: this.formModel.value.Dob,
      Gender: this.formModel.value.Gender,
      Occupation: this.formModel.value.Occupation,
      Country: this.formModel.value.Country,
      City: this.formModel.value.City,
      State: this.formModel.value.State,
      Address: this.formModel.value.Address,
      Email: this.formModel.value.Email,
      Passwords: this.formModel.value.Passwords.Password,
      ContactNo: this.formModel.value.ContactNo,
      Zip: this.formModel.value.Zip
    };
    
   
    console.log(body);
    this.repo.replaceDonor(new donor(null,body.Name,body.Email,body.Passwords,Number(body.ContactNo),
      body.Cnic,body.Dob,body.Country,body.City,body.State,body.Address,body.Zip,
      body.Gender,body.Occupation,this.val,"not active",null));
    this.formModel.reset();
  }
  ngOnInit(): void {
    this.repo.getdonor(this.id).subscribe(res=>{
      this.donor = res['results'];
    })
  }

}
