import { message } from "./message.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpEventType } from "@angular/common/http";
import { accepter } from './accepter.model';
import { admin } from './admin.model';
import { docupload } from './docupload.model';
import { donor } from './donor.model';
import { post } from './post.model';
import { imageupload } from './imageupload.model';
import { variable } from './variable.model';
import { login } from './login.model';

const loginUrl= "https://localhost:44371/api/login";
const donorUrl= "https://localhost:44371/api/donors";
const adminsUrl= "https://localhost:44371/api/admins";
const accepterUrl ="https://localhost:44371/accepters";
const postUrl = "https://localhost:44371/posts";

@Injectable() 
export class Repository {
    //Admin
    admin: admin;
    admins: admin[];
    //Accepter
    accepter: accepter;
    accepters: accepter[]=[];
    //Donor
    donor: donor;
    donors: donor[];
    //doc
    onUploadFinished: any;
    docs: docupload[];
    //Post
    post: post;
    posts: post[]=[];
    //Img
    imgs: imageupload[];
    //Login
    login: login;
    logins: login[];
    
    
    constructor(private http: HttpClient)
    {         
        ;
    }
res:string;

//Login
createLogin(logg: login,id:number) 
    {        
        let data = {       
            id:logg.Id,email:logg.email,password:logg.password,type:logg.type
        };
        console.log(data); 
        this.http.post<number>(loginUrl, data)             
            .subscribe(id => {                 
                logg.Id = id;                 
                this.logins.push(logg);   
        });
        this.res= localStorage.getItem('loginId');
        console.log(this.res);
        return "created";
    }
    type = sessionStorage.getItem('type');
    getLogins(related = false){
        this.http.get(`${loginUrl}?related=${related}`).subscribe(res=>{
            let l:login;

            l.Id = res['id']
        });

    }
    getAuthAccepter(id: number){
        this.http.get<accepter>(loginUrl+"/" + id + this.type)
        .subscribe(a => this.accepter = a);
        console.log(this.type);
    }
    getAuthDonor(id: number){
        this.http.get<donor>(loginUrl+"/" + id+ "/donor")
        .subscribe(a => this.donor = a);
    }
    getAuthAdmin(id: number){
        this.http.get<admin>(loginUrl+"/" + id + "/admin")
        .subscribe(a => this.admin = a);
    }


//Posts
createPost(acce: post,formData: FormData) 
    {         
        let data = {            
            id:acce.postId,Title: acce.title,            
            Category: acce.category, description: acce.description, 
            targetAmount: acce.targetAmount, receivedAmount: acce.receivedAmount,             
            time: acce.time, shares: acce.shares,
            Urgent: acce.urgent, accepterId: acce.accepterId,             
            donorId: acce.donorId
        };
        console.log(data); 
        this.http.post<number>(postUrl, data)             
            .subscribe(id => {                 
                acce.postId = id;                 
                this.posts.push(acce);   
            });  
        this.http.post(postUrl+"/" + 15,formData, {reportProgress: true, observe: 'events'})
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress)
            console.log("loading");
            // this.progress = Math.round(100 * event.loaded / event.total);
          else if (event.type === HttpEventType.Response) {
            // this.message = 'Upload success.';
            this.onUploadFinished.emit(event.body);
          }
        });
        return "created";
    }
    getpost(id: number){
        this.http.get<post>(postUrl+"/" + id)
        .subscribe(a => this.post = a);
    }
    getposts(related = false){
        this.http.get<post[]>(`${postUrl}?related=${related}`)
        .subscribe(msgs => this.posts = msgs);
    }
    get Post() : post{
        console.log("data received");
        return this.post;
    }
    replacePost(acce: post) {         
        let data = {             
            id:acce.postId,Title: acce.title,            
            Category: acce.category, description: acce.description, 
            targetAmount: acce.targetAmount, receivedAmount: acce.receivedAmount,             
            time: acce.time, shares: acce.shares,
            Urgent: acce.urgent, accepterId: acce.accepterId,             
            donorId: acce.donorId         
        };         
        this.http.put(`${postUrl}/${acce.postId}`, data)             
        .subscribe(() => this.getpost(acce.postId));     
    }


//Donors
createDonor(acce: donor,formData: FormData,id : Number) 
    {         
        let data = {            
            DonorName: acce.donorName,            
            email: acce.email, password: acce.password, 
            contactNo: acce.contactNo, cnic: acce.cnic,             
            dob: acce.dob, country: acce.country,
            city: acce.city, state: acce.state,             
            address: acce.address, zipCode: acce.zipCode,
            gender: acce.gender, occupation: acce.occupation,
            code: acce.code,             
            status: acce.status,adminId:acce.adminId   
        };
        console.log(data); 
        this.http.post<number>(donorUrl, data)             
            .subscribe(id => {                 
                acce.donorId = id;                 
                this.donors.push(acce);   
            });  
        this.http.post(donorUrl+"/image",formData, {reportProgress: true, observe: 'events'})
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress)
            console.log("loading");
            // this.progress = Math.round(100 * event.loaded / event.total);
          else if (event.type === HttpEventType.Response) {
            // this.message = 'Upload success.';
            this.onUploadFinished.emit(event.body);
          }
        });
            return "created";
    }
    replaceDonor(acce: donor) {         
        let data = {             
            DonorName: acce.donorName,            
            email: acce.email, password: acce.password, 
            contactNo: acce.contactNo, cnic: acce.cnic,             
            dob: acce.dob, country: acce.country,
            city: acce.city, state: acce.state,             
            address: acce.address, zipCode: acce.zipCode,
            gender: acce.gender, occupation: acce.occupation,
            code: acce.code,             
            status: acce.status,adminId:acce.adminId   
        };         
        this.http.put(`${donorUrl}/${acce.donorId}`, data)             
        .subscribe(() => this.getdonor(acce.donorId));     
    }
    getdonor(id: number){
        this.http.get<donor>(donorUrl+"/" + id)
        .subscribe(a => this.donor = a);
    }
    getdonors(related = false){
        this.http.get<donor[]>(`${donorUrl}?related=${related}`)
        .subscribe(msgs => this.donors = msgs);
    }
    get Donor() : donor{
        console.log("data received");
        return this.donor;
    }

//Accepters
    createAccepter(acce: accepter,formData: FormData,id : number) 
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
        };
        console.log(data); 
        this.http.post<number>(accepterUrl, data)             
            .subscribe(id => {                 
                acce.accepterId = id;                 
                this.accepters.push(acce);   
            });  
        this.http.post(accepterUrl + "/" + 40,formData, {reportProgress: true, observe: 'events'})
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress)
            console.log("loading");
            // this.progress = Math.round(100 * event.loaded / event.total);
          else if (event.type === HttpEventType.Response) {
            // this.message = 'Upload success.';
            this.onUploadFinished.emit(event.body);
          }
        });
            return "created";
    }
    replaceAccepter(acce: accepter) {         
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
        };         
        this.http.put(`${accepterUrl}/${acce.accepterId}`, data)             
        .subscribe(() => this.getdonor(acce.accepterId));     
    }
    getaccepter(id: number){
        this.http.get<accepter>("/api/accepters/" + id)
        .subscribe(a => this.accepter = a);
    }
    getaccepeters(related = false){
        this.http.get<accepter[]>(`${accepterUrl}?related=${related}`)
        .subscribe(msgs => this.accepters = msgs);
    }
    get Accepter() : accepter{
        console.log("data received");
        return this.accepter;
    }
    
//Admin
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
    replaceAdmin(prod: admin) {         
        let data = {             
            adminName: prod.adminName, email: prod.email,             
            password: prod.password, contactNo: prod.contactNo,
            gender: prod.gender, dob: prod.dob,             
            cnic: prod.cnic, country: prod.country,
            city: prod.city, state: prod.state,             
            address: prod.address, code: prod.code,
            status: prod.status
        };         
        this.http.put(`${adminsUrl}/${prod.adminId}`, data)             
        .subscribe(() => this.getdonor(prod.adminId));     
    }
    getadmin(id: number){
        this.http.get<admin>("/api/admins/" + id)
        .subscribe(a => this.admin = a);
    }
    getadmins(related = false){
        this.http.get<admin[]>(`${adminsUrl}?related=${related}`)
        .subscribe(msgs => this.admins = msgs);
    }
    get Admin() : admin{
        console.log("data received");
        return this.admin;
    }

}