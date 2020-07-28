
import { Injectable } from "@angular/core";
import { HttpClient, HttpEventType } from "@angular/common/http";
import { accepter } from './accepter.model';
import { admin } from './admin.model';
import { docupload } from './docupload.model';
import { donor } from './donor.model';
import { post } from './post.model';
import { imageupload } from './imageupload.model';
import { login } from './login.model';
import { comment } from './comment.model';
import { using } from 'rxjs';
import { notificatio } from './notification.model';
import { donation } from './donation.model';

const loginUrl= "https://localhost:44371/api/Login";
const donorUrl= "https://localhost:44371/api/Donor";
const adminsUrl= "https://localhost:44371/api/Admin";
const accepterUrl ="https://localhost:44371/api/Accepter";
const postUrl = "https://localhost:44371/api/Post";
const commentUrl= "https://localhost:44371/api/Comment";
const notiUrl="https://localhost:44371/api/Notification";

@Injectable() 
export class Repository {
    //Admin
    admin: admin;
    admins: admin[];
    //Accepter
    accepter: accepter;
    accepters: accepter[];
    //Donor
    donor: donor;
    donors: donor[];
    //doc
    docs: docupload[];
    //Post
    post: post;
    posts: post[];
    //notification
    noti: notificatio;
    notis: notificatio[];
    //donation
    donation: donation;
    donations: donation[];
    //Img
    imgs: imageupload[];
    //Login
    login: login;
    logins: login[];
    //comment
    com: comment;
    comments: comment[];
    //
    uId: number;
    
    
    constructor(private http: HttpClient)
    {         
        
    }
res:string;

//Notification
// createNotification(acce: comment,formData: FormData) 
//     {         
//         let data = {            
//             id:acce.comment_id
//         };
//         console.log(data); 
//         this.http.post<number>(commentUrl, data)             
//             .subscribe(id => {                 
//                 acce.comment_id = id;        
//             });  
        
//         return "created";
//     }
    getNotification(id: number){
        return this.http.get(notiUrl+"/" + id);
    }
    getNotifications(related = false){
        return this.http.get(`${notiUrl}?related=${related}`);
    }
    get Notification() : notificatio{
        console.log("data received");
        return this.com;
    }
    replaceNotifications(acce: notificatio) {         
        // let data = {             
        //      
        //            
        // };         
        this.http.put(`${notiUrl}/${acce.id}`,acce)             
        .subscribe(() => this.getpost(acce.id));     
    }




//Login
createLogin(logg: login,id:number) 
    {        
        let data = {       
            id:logg.id,email:logg.email,password:logg.password,type:logg.type
        };
        console.log(data); 
        this.http.post<number>(loginUrl, data)             
            .subscribe(res => {                 
                this.uId = res;       
                console.log(res);     
                sessionStorage.setItem('userId',res.toLocaleString()); 
                console.log(sessionStorage.getItem('userId'));
                this.logins.push(logg);   
        });
        return "created";
    }

//Comment
createComment(acce: comment) 
    {         
         let data = {             
            comment_id: acce.comment_id,
            post_id: acce.post_id,
            accepter_id: acce.accepter_id,
            comment_text: acce.comment_text,
            time: acce.time,
            donor_id: acce.donor_id
                   
        }; 
        this.http.post<number>(commentUrl, data)             
            .subscribe(id => {             
                console.log(data);    
                acce.comment_id = id;   
                this.comments.push(data); 
            });  
        
        return "created";
    }
    getcomment(id: number){
      return this.http.get(commentUrl+"/" + id);
    }
    getComments(related = false){
        return this.http.get(`${commentUrl}?related=${related}`);
    }
    get Comment() : comment{
        console.log("data received");
        return this.com;
    }
    replaceComment(acce: comment) {         
        let data = {             
             
                   
        };         
        this.http.put(`${commentUrl}/${acce.comment_id}`, acce)             
        .subscribe(() => this.getpost(acce.comment_id));     
        console.log(acce);
    }
    deleteComment(id: number)
    {
        this.http.delete(notiUrl+"/"+id).subscribe();
    }


//Posts
createPost(acce: post) 
    {         
        let data = {            
            id:acce.post_id,Title: acce.title,            
            Category: acce.category, description: acce.description, 
            targetAmount: acce.target_amount, receivedAmount: acce.received_amount,             
            time: acce.time, shares: acce.shares,
            Urgent: acce.urgent, accepterId: acce.accepter_id,             
            donorId: acce.donor_id
        };
        console.log(data); 
        this.http.post<number>(postUrl, data)             
            .subscribe(id => {                 
                acce.post_id = id;                 
                this.posts.push(acce);   
            });  
        return "created";
    }
    getpost(id: number){
       return this.http.get<post>(postUrl+"/" + id);
    }
    getposts(related = false){
       return  this.http.get<post[]>(`${postUrl}?related=${related}`);
    }
    get Post() : post{
        console.log("data received");
        return this.post;
    }
    replacePost(acce: post) {         
        let data = {             
            id:acce.post_id,Title: acce.title,            
            Category: acce.category, description: acce.description, 
            targetAmount: acce.target_amount, receivedAmount: acce.received_amount, shares: acce.shares 
        };         
        this.http.put(`${postUrl}/${acce.post_id}`, data)             
        .subscribe(() => this.getpost(acce.post_id));     
    }
    deletePost(id: number)
    {
        this.http.delete(postUrl+"/"+id).subscribe();
    }


//Donors
createDonor(acce: donor) 
    {         
        let data = {            
            donor_name: acce.donor_name,            
            email: acce.email, password: acce.password, 
            contact_no: acce.contact_no, CNIC: acce.CNIC,             
            DOB: acce.DOB, country: acce.country,
            city: acce.city, state: acce.state,             
            address: acce.address, zip_code: acce.zip_code,
            gender: acce.gender, occupation: acce.occupation,
            code: acce.code,             
            status: acce.status,admin_id:acce.admin_id
        };
        console.log(data); 
        this.http.post<number>(donorUrl, data)             
            .subscribe(id => {                 
                acce.donor_id = id;                 
                this.donors.push(acce);  
            }); 
        return "created";
    }
    replaceDonor(acce: donor) {         
        let data = {             
            donor_name: acce.donor_name,            
            email: acce.email, password: acce.password, 
            contact_no: acce.contact_no, CNIC: acce.CNIC,             
            DOB: acce.DOB, country: acce.country,
            city: acce.city, state: acce.state,             
            address: acce.address, zip_code: acce.zip_code,
            gender: acce.gender, occupation: acce.occupation,
            code: acce.code,             
            status: acce.status,admin_id:acce.admin_id
        };         
        this.http.put(`${donorUrl}/${acce.donor_id}`, data)             
        .subscribe(() => this.getdonor(acce.donor_id));
    }
    getdonor(id: number){
        return this.http.get<donor>(donorUrl+"/" + id)
    }
    getdonors(related = false){
       return this.http.get<donor[]>(`${donorUrl}?related=${related}`)
    }
    get Donor() : donor{
        console.log("data received");
        return this.donor;
    }
    deleteDonor(id: number)
    {
        this.http.delete(donorUrl+"/"+id).subscribe();
    }
//Accepters
    createAccepter(acce: accepter,formData: FormData) 
    {         
        let data = {          
            accepter_name: acce.accepter_name, father_name: acce.father_name,             
            email: acce.email, password: acce.password, 
            contact_no: acce.contact_no, cnic: acce.CNIC,             
            dob: acce.DOB, country: acce.country,
            city: acce.city, state: acce.state,             
            address: acce.address, zip_code: acce.zip_code,
            gender: acce.gender, occupation: acce.occupation,             
            family_members: acce.family_members, marital_status: acce.marital_status,
            salary: acce.salary, code: acce.code,             
            status: acce.status,adminId:acce.admin_id
        };
        console.log(data); 
        this.http.post<number>(accepterUrl, data)             
            .subscribe(id => {                 
                acce.accepter_id = id;                 
                this.accepters.push(acce);   
            });  
        this.http.post(accepterUrl + "/" + acce.accepter_id,formData)
        .subscribe();
        return "created";
    }
    replaceAccepter(acce: accepter) {         
        let data = {             
            accepter_name: acce.accepter_name, father_name: acce.father_name,             
            email: acce.email, password: acce.password, 
            contact_no: acce.contact_no, cnic: acce.CNIC,             
            dob: acce.DOB, country: acce.country,
            city: acce.city, state: acce.state,             
            address: acce.address, zipCode: acce.zip_code,
            gender: acce.gender, occupation: acce.occupation,             
            family_members: acce.family_members, marital_status: acce.marital_status,
            salary: acce.salary, code: acce.code,             
            status: acce.status,adminId:acce.admin_id
        };         
        this.http.put(`${accepterUrl}/${acce.accepter_id}`, data)             
        .subscribe(() => this.getdonor(acce.accepter_id));     
    }
    getaccepter(id: number){
        return this.http.get<accepter>(accepterUrl+"/" + id)
    }
    getaccepeters(related = false){
       return this.http.get<accepter[]>(`${accepterUrl}?related=${related}`)
        
    }
    get Accepter() : accepter{
        return this.accepter;
    }
    deleteAccepter(id: number)
    {
        this.http.delete(accepterUrl+"/"+id).subscribe();
    }
    
//Admin
    createAdmin(prod: admin) {         
        let data = {             
            adminName: prod.admin_name, email: prod.email,             
            password: prod.password, contactNo: prod.contact_no,
            gender: prod.gender, dob: prod.DOB,             
            cnic: prod.CNIC, country: prod.country,
            city: prod.city, state: prod.state,             
            address: prod.address, code: prod.code,
            status: prod.status
        };
        this.http.post<number>(adminsUrl, data)             
        .subscribe(id => {                 
            prod.admin_id = id;                 
            this.admins.push(prod);   
            alert("from repo");          
        });     
    }
    replaceAdmin(prod: admin) {         
        let data = {             
            adminName: prod.admin_name, email: prod.email,             
            password: prod.password, contactNo: prod.contact_no,
            gender: prod.gender, dob: prod.DOB,             
            cnic: prod.CNIC, country: prod.country,
            city: prod.city, state: prod.state,             
            address: prod.address, code: prod.code,
            status: prod.status
        };         
        this.http.put(`${adminsUrl}/${this.admin.admin_id}`, data)             
        .subscribe(() => this.getdonor(this.admin.admin_id));     
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
    deleteAdmin(id: number)
    {
        this.http.delete(adminsUrl+"/"+id).subscribe();
    }

}