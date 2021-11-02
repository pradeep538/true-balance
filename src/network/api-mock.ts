import * as mockData from "./api-mock-data";
import * as URL from "./apiroutes";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { parseQueryString } from "../utils/helper";

class ApiMockTrueBalance {
  setUpMock() {
    const mock = new MockAdapter(axios,{delayResponse:0});
    let detailsUrl = URL.VIDEO_DETAILS + "?videoId=1";
    mock.onGet(detailsUrl).reply( (config: any) => {
      const queryObject = parseQueryString(config.url);
      let videoDetails = mockData.getVideoDetails(Number(queryObject.videoId));
      return new Promise(function (resolve, reject) {
        return resolve([200, videoDetails]);
      });
    });
    mock.onGet(URL.VIDEO_RECOMENDATIONS + "?userId=1").reply((config: any) => {
      const queryObject = parseQueryString(config.url);
      let videoRecomendationList = mockData.getVideoRecomendation(queryObject.userId);
      return new Promise(function (resolve, reject) {
        return resolve([200, videoRecomendationList]);
      });
    });
    mock.onGet(URL.COMMENTS_LIST + "?videoId=1").reply((config: any) => {
      const queryObject = parseQueryString(config.url);
      let commentsList = mockData.getCommentsList(Number(queryObject.videoId));
      return new Promise(function (resolve, reject) {
        return resolve([200, commentsList]);
      });
    });
  }
}

export const mockApiInstance = new ApiMockTrueBalance();
