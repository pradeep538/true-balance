import { addVideoDetails } from "../../redux/actions/index";
import useCaseInstance from "../index";
import storeInstance from "../../redux/store";
export const getVideoDetails = (videoId: number) => {
  let getVideoDetailsResponse = useCaseInstance.apiInstance.videoDetails(
    videoId
  );
  getVideoDetailsResponse
    .then((response: any) => {
      if (response.status === 200) {
        storeInstance.dispatch(addVideoDetails(response.data));
      }
    })
    .catch((error: any) => {
      console.log("Error occured", error);
    });

    return getVideoDetailsResponse;
};
