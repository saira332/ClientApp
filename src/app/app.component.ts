import { Component } from '@angular/core';
import { Repository } from "./models/repository";
 import { message } from "./models/message.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private repo: Repository) { }
    get message(): message {
         return this.repo.message;     
}
  title = 'CharityApp';
}
