import Comments from "./Comments";

class VideoDetails {
  title: string = "";
  description: string = "";
  length: string = "";
  url: string = "";
  commentsList: Comments[];
  constructor(title: string, description: string, length: string, url: string) {
    this.title = title;
    this.description = description;
    this.length = length;
    this.url = url;
    this.commentsList = [];
  }
  addComments(commentsList: Comments[]) {
    this.commentsList = commentsList;
  }
}
export default VideoDetails;
