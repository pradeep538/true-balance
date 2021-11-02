class Reply {
  messagerName: string;
  id: number;
  message: string;
  timestamp: number;
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
  }
}
export default Reply;
