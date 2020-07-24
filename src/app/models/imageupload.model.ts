import { accepter } from './accepter.model';
import { donor } from './donor.model';
import { post } from './post.model';

export class imageupload {
        constructor(
                 public imageId?: number,
                 public imageName?: string,
                 public postId?:post,
                 public path?: string) {
        } 

    }
       
       