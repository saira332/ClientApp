import { accepter } from './accepter.model';
import { donor } from './donor.model';
import { post } from './post.model';

export class imageupload {
        constructor(
                 public image_id?: number,
                 public image_name?: string,
                 public post_id?:number,
                 public path?: string) {
        } 

    }
       
       