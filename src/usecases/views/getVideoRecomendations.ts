import { addVideoRecomandations } from "../../redux/actions/index";
import useCaseInstance from "../index";
import storeInstance from "../../redux/store";
export const getVideoRecomendations = (videoId: number) => {
  let recomendationsResponse = useCaseInstance.apiInstance.videoRecomendations(videoId);
  recomendationsResponse
    .then((response: any) => {
      if (response.status === 200) {
        storeInstance.dispatch(addVideoRecomandations(response.data));
      }
    })
    .catch((error: any) => {
      console.log("Error occured", error);
    });
    return recomendationsResponse;
};
