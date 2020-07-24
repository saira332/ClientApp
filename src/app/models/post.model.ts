import { accepter } from './accepter.model';
import { donor } from './donor.model';

export class post {
        constructor(
                 public postId?: number,
                 public title?: string,
                 public category?: string,
                 public description?: string,
                 public targetAmount?: number,
                 public receivedAmount?: number,
                 public time?: Date,
                 public shares?: number,
                 public urgent?: string,
                 public accepterId?: accepter,
                 public donorId?: donor) {
                } 

           }
       
       