class VideoInfo {
  title: string = "";
  description: string = "";
  length: string = "";
  url: string = "";
  constructor(title: string, description: string, length: string, url: string) {
    this.title = title;
    this.description = description;
    this.length = length;
    this.url = url;
  }
}
export default VideoInfo;
