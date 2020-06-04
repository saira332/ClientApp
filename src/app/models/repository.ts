import { message } from "./message.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable() 
export class Repository {
    message: message; 
    messageData: message;
    constructor(private http: HttpClient)
    {         
        this.getmessage(2);
    }
    
    getmessage(id: number)
    {          
        this.http.get<message>("/api/messages/" + id)
        .subscribe(p => {
            this.messageData = p;
            console.log("Product Data Received");
        });
        // .subscribe(p => this.message = p);
    }
        get product(): message {
            console.log("Product Data Requested"); 
            return this.messageData;
        }
//     constructor() {         
//         this.message = JSON.parse(document.getElementById("data").textContent);
//     }

}