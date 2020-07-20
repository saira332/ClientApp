import { admin } from './admin.model';
export class accepter {
        constructor(
                 public accepterId?: number,
                 public accepterName?: string,
                 public fatherName?: string,
                 public email?: string,
                 public password?: string,
                 public contactNo?: string,
                 public cnic?: string,
                 public dob?: Date,
                 public country?: string,
                 public city?: string,
                 public state?: string,
                 public address?: string,
                 public zipCode?: string,
                 public gender?: string,
                 public occupation?: string,
                 public familyMembers?: number,
                 public maritalStatus?: string,
                 public salary?: number,
                 public code?: number,
                 public status?: string,
                 public adminId?: number
        ) {
                  } 

           }