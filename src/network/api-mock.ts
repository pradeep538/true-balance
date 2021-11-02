import * as mockData from "./api-mock-data";
import * as URL from "./apiroutes";
const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

class ApiMockTrueBalance {
  setUpMock() {
    const mock = MockAdapter(axios, { delayResponse: 0 });
    mock.onGet(URL.VIDEO_DETAILS + "?videoId=1", (config: any) => {
      const videoId = config.params.videoId;
      let videoDetails = mockData.getVideoDetails(videoId);
      return new Promise(function (resolve, reject) {
        return resolve([200, videoDetails]);
      });
    });
    mock.onGet(URL.VIDEO_RECOMENDATIONS + "?userId=1", (config: any) => {
      const userId = config.params.userId;
      let videoRecomendationList = mockData.getVideoRecomendation(userId);
      return new Promise(function (resolve, reject) {
        return resolve([200, videoRecomendationList]);
      });
    });
    mock.onGet(URL.COMMENTS_LIST + "?videoId=1", (config: any) => {
      const videoId = config.params.videoId;
      let commentsList = mockData.getCommentsList(videoId);
      return new Promise(function (resolve, reject) {
        return resolve([200, commentsList]);
      });
    });
  }
}

export default ApiMockTrueBalance;
