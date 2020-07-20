import { Component } from '@angular/core';
import { Repository } from "./models/repository";
import { message } from "./models/message.model";
import { admin } from './models/admin.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private repo: Repository) { }
//    get message(): message {
//          return this.repo.message;     
//   }
//   get messages(): message[]{
//     return this.repo.messages;
//   }
//   createProduct() {         
//     this.repo.createProduct(new message(0,0,0,"abc"));
//     alert("create product");
//   }

//   get admins(): admin[]{
//     return this.repo.admins;
//   }
//   dob= new Date("Fri Dec 08 2019 07:44:57");
//   createAdmin() {         
//     this.repo.createAdmin(new admin(2,"jack","jack@gmail.com",
//     "jack123",8738267267,"male",this.dob,"73672875","pakistan","jpj","punjab","jinnah colony",6767,"active"));
//     alert("create Admin");
//   }

  title = 'CharityApp';
}
