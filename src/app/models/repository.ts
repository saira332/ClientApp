import { message } from "./message.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { accepter } from './accepter.model';
import { admin } from './admin.model';

const messagesUrl = "/api/messages";
const adminsUrl= "/api/admins";
const accepterUrl ="api/accepters";

@Injectable() 
export class Repository {
    admin: admin;
    admins: admin[];
    accepter: accepter;
    accepters: accepter[];
    message: message; 
    // messageData: message;
    messages: message[];
    constructor(private http: HttpClient)
    {         
        this.getaccepter(13);
        this.getmessages(true);

    }

    createAccepter(acce: accepter) 
    {         
        let data = {            
            id:acce.accepterId,AccepterName: acce.accepterName, fatherName: acce.fatherName,             
            email: acce.email, password: acce.password, 
            contactNo: acce.contactNo, cnic: acce.cnic,             
            dob: acce.dob, country: acce.country,
            city: acce.city, state: acce.state,             
            address: acce.address, zipCode: acce.zipCode,
            gender: acce.gender, occupation: acce.occupation,             
            familyMembers: acce.familyMembers, maritalStatus: acce.maritalStatus,
            salary: acce.salary, code: acce.code,             
            status: acce.status,adminId:acce.adminId
            // , admin: acce.adminId ? acce.adminId.adminId : 0      
        };
        console.log(data);
        this.http.post<number>(accepterUrl, data)             
            .subscribe(id => {                 
                acce.accepterId = id;                 
                this.accepters.push(acce);   
                alert("from repo");          
            });  
            return "created";
    }
    getaccepter(id: number){
        this.http.get<accepter>("/api/accepters/" + id)
        .subscribe(a => this.accepter = a);
    }
    getadmin(id: number){
        this.http.get<admin>("/api/admins/" + id)
        .subscribe(a => this.admin = a);
    }
    getmessage(id: number)
    {         
        //for whole table
        this.http.get<message>(`${messagesUrl}/${id}`)
        .subscribe(p => this.message = p);

        //for single data 
        // this.http.get<message>("/api/messages/" + id)
        // .subscribe(p => {
        //     this.messageData = p;
        //     console.log("Message Data Received");
        // });
        // .subscribe(p => this.message = p);
    }
    //for ehole table
    getmessages(related = false){
        this.http.get<message[]>(`${messagesUrl}?related=${related}`)
        .subscribe(msgs => this.messages = msgs);
    }
    

    getadmins(related = false){
        this.http.get<admin[]>(`${adminsUrl}?related=${related}`)
        .subscribe(msgs => this.admins = msgs);
    }
    get Admin() : admin{
        console.log("data received");
        return this.admin;
    }
    getaccepeters(related = false){
        this.http.get<accepter[]>(`${accepterUrl}?related=${related}`)
        .subscribe(msgs => this.accepters = msgs);
    }
    get Accepter() : accepter{
        console.log("data received");
        return this.accepter;
    }
    

    //for single data
    //     get product(): message {
    //         console.log("Message Data Requested"); 
    //         return this.message;
    //     }


        createProduct(prod: message) {         
        let data = {             
            accepterId: prod.accepterId, donorId: prod.donorId,             
            text: prod.text, time: prod.time
        };
            this.http.post<number>(messagesUrl, data)             
            .subscribe(id => {                 
                prod.messageId = id;                 
                this.messages.push(prod);   
                alert("from repo");          
            });     
        }

        createAdmin(prod: admin) {         
            let data = {             
                adminName: prod.adminName, email: prod.email,             
                password: prod.password, contactNo: prod.contactNo,
                gender: prod.gender, dob: prod.dob,             
                cnic: prod.cnic, country: prod.country,
                city: prod.city, state: prod.state,             
                address: prod.address, code: prod.code,
                status: prod.status
            };
                this.http.post<number>(adminsUrl, data)             
                .subscribe(id => {                 
                    prod.adminId = id;                 
                    this.admins.push(prod);   
                    alert("from repo");          
                });     
            }

//     constructor() {         
//         this.message = JSON.parse(document.getElementById("data").textContent);
//     }

}