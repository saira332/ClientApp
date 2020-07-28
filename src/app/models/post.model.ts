import { accepter } from './accepter.model';
import { donor } from './donor.model';

export class post {
        constructor(
                 public post_id?: number,
                 public title?: string,
                 public category?: string,
                 public description?: string,
                 public target_amount?: number,
                 public received_amount?: number,
                 public time?: Date,
                 public shares?: number,
                 public urgent?: string,
                 public accepter_id?: number,
                 public donor_id?: number) {
                } 

           }
       
       