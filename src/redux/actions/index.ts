import {
  GET_COMMENTS,
  GET_VIDEO_DETAILS,
  GET_VIDEO_RECOMENDATIONS
} from "./types";

export const addVideoDetails = (data: any) => ({
  type: GET_VIDEO_DETAILS,
  payload: data
});
export const addVideoRecomandations = (data: any) => ({
  type: GET_VIDEO_RECOMENDATIONS,
  payload: data
});
export const addVideoComments = (data: any) => ({
  type: GET_COMMENTS,
  payload: data
});
