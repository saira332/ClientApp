import { chatRoom } from './chatRoom.model';

export class message {
         constructor(
                  public _messageId?: number,
                  public _senderId?: number,
                  public _receiverId?: number,
                  public _text?: string,
                  public _when?: Date,
                  public _roomId?: chatRoom ) {
                      this.messageId = _messageId;
                      this.senderId = _senderId;
                      this.receiverId = _receiverId;
                      this.text = _text;
                      this.when = _when;
                      this.roomId = _roomId;
                   } 

        messageId: number;
        senderId: number;
        receiverId: number;
        text: string;
        when: Date;
        roomId: chatRoom;
            }
        // public int MessageId { get; set; }
        // public int? SenderId { get; set; }
        // public int? ReceiverId { get; set; }
        // public string Text { get; set; }
        // public DateTime? When { get; set; }
        // public int? RoomId { get; set; }

        // public virtual ChatRoom Room { get; set; }