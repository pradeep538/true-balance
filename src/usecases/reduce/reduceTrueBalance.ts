import Comments from "../../entities/Comments";
import VideoDetails from "../../entities/VideoDetails";
import VideoInfo from "../../entities/VideoInfo";
import { Tstate } from "../../redux/reducers";

export const videoDetails = (state: Tstate, data: any) => {
  let { title, description, length, url } = data;
  let videoDetailsInstance = new VideoDetails(title, description, length, url);
  state.videoDetails = videoDetailsInstance;
  return state;
};

export const videoRecomendations = (state: Tstate, data: any) => {
  let videoList: VideoInfo[] = data.map((item: VideoInfo) => {
    let { title, description, length, url } = item;
    return new VideoInfo(title, description, length, url);
  });
  state.videoRecomendations.appendVideoList(videoList);
  return state;
};

export const comments = (state: Tstate, data: any) => {
  let commentsList: Comments[] = data.map((item: Comments) => {
    let { messagerName, id, message, timestamp } = item;
    return new Comments(messagerName, id, message, timestamp);
  });
  state.comments.push(...commentsList);
  return state;
};
