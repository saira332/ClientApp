import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Repository } from "../../models/repository";
import { accepter } from "../../models/accepter.model";
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-donor-signup',
  templateUrl: './donor-signup.component.html',
  styleUrls: ['./donor-signup.component.css']
})
export class DonorSignupComponent implements OnInit {

  constructor(private _router: Router, private repo: Repository,private fb: FormBuilder) { }

  formModel = this.fb.group({
    Name: ['', Validators.required],
    FatherName: ['', Validators.required],
    Cnic: ['', [Validators.required, Validators.minLength(13),Validators.maxLength(13)]],
    Dob: ['', Validators.required],
    Gender: ['', Validators.required],
    Occupation: ['', Validators.required],
    Country: ['', Validators.required],
    City: ['', Validators.required],
    State: ['', Validators.required],
    Address: ['', Validators.required],
    Zip: ['', Validators.required],
    Email: ['', Validators.email],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(8)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords }),
    ContactNo: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(11)]]

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

  onSubmit() {
    var body = {
      Name:this.formModel.value.Name,
      FatherName: this.formModel.value.FatherName,
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
    this.repo.createAccepter(new accepter(null,body.Name,body.FatherName,body.Email,body.Passwords,body.ContactNo,
      body.Cnic,body.Dob,body.ContactNo,body.City,body.State,body.Address,null,body.Gender,body.Occupation,null,null,null,null,null,null));
    this.formModel.reset();
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
