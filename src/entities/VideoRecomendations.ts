import VideoInfo from "./VideoInfo";

class VideoRecomendations {
  videoList: VideoInfo[];
  constructor() {
    this.videoList = [];
  }
  appendVideoList(videoList: VideoInfo[]) {
    this.videoList.push(...videoList);
  }
}
export default VideoRecomendations;
