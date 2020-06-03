import { message } from "./message.model";
export class Repository {
    constructor() {         
        this.message = JSON.parse(document.getElementById("data").textContent);
    }
message: message; 
}