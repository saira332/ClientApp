export class donation {
        constructor(
                 public donation_id: number,
                 public donor_id?: number,
                 public accepter_id?: number,
                 public time?:Date,
                 public donation_type?: string,
                 public description?: string,
                 public post_id?: number,
                 public amount?: number
         ) {
        } 

    }
       
       