import Reply from "./Reply";

class Comments {
  messagerName: string;
  id: number;
  message: string;
  timestamp: number;
  reply: Reply[];
  constructor(
    messagerName: string,
    id: number,
    message: string,
    timestamp: number
    
  ) {
    this.messagerName = messagerName;
    this.id = id;
    this.message = message;
    this.timestamp = timestamp;
    this.reply = []
  }
  setReply(reply: Reply) {
    this.reply.push(reply);
  }
}
export default Comments;
