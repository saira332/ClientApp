export class chatRoom {
        constructor(
             public _roomId?: number,
             public _senderId?: number,
             public _receiverId?: number) {
         this.roomId = _roomId;
         this.senderId = _senderId;
         this.receiverId = _receiverId;
      } 
        roomId: number;
        senderId: number;
        receiverId: number;
    }



// public int RoomId { get; set; }
//         public int? SenderId { get; set; }
//         public int? ReceiverId { get; set; }