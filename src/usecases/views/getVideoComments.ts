import { addVideoComments } from "../../redux/actions/index";
import useCaseInstance from "../index";
import storeInstance from "../../redux/store";
export const getVideoComments = (videoId: number) => {
  let commentsResponse = useCaseInstance.apiInstance.commentsList(videoId);
  commentsResponse
    .then((response: any) => {
      if (response.status === 200) {
        storeInstance.dispatch(addVideoComments(response.data));
      }
    })
    .catch((error: any) => {
      console.log("Error occured", error);
    });
    return commentsResponse;
};
