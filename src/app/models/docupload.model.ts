import { accepter } from './accepter.model';
import { donor } from './donor.model';

export class docupload {
        constructor(
                 public docId?: number,
                 public accepterId?: accepter,
                 public donorId?: donor,
                 public docName?: string,
                 public path?: string) {
        } 

    }
       
       