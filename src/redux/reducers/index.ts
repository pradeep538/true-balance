import VideoDetails from "../../entities/VideoDetails";
import Recomendations from "../../entities/VideoRecomendations";
import Comments from "../../entities/Comments";
/* import { boardsMock } from "../../network/api-mock-data"; */
import {
  videoDetails,
  videoRecomendations,
  comments
} from "../../usecases/reduce/reduceTrueBalance";

import * as Actions from "../actions/types";
import VideoRecomendations from "../../entities/VideoRecomendations";

export type Tstate = {
  videoDetails: VideoDetails;
  videoRecomendations: Recomendations;
  comments: Comments[];
};

const initialState: Tstate = {
  /* boards: [...boardsMock], */
  videoDetails: new VideoDetails("", "", "", ""),
  videoRecomendations: new VideoRecomendations(),
  comments: []
};
export default function trelloReducer(
  state: Tstate = initialState,
  action: any
) {
  switch (action.type) {
    case Actions.GET_VIDEO_DETAILS:
      return { ...videoDetails(state, action.payload) };
    case Actions.GET_VIDEO_RECOMENDATIONS:
      return { ...videoRecomendations(state, action.payload) };
    case Actions.GET_COMMENTS:
      let updatedComments = comments(state, action.payload) 
      return { ...updatedComments};
    case Actions.RESET_STORE:
      return initialState;
    default:
      return state;
  }
}
