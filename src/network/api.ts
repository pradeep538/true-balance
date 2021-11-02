import Network from "./network";
import * as URL from "./apiroutes";

if (process.env.NODE_ENV === "development") {
  const MockApi = require("./api-mock").mockApiInstance
  console.log(MockApi.setUpMock);
  // setup mock data for development env
  MockApi.setUpMock();
}
class Api {
  api: any;
  constructor(baseUrl: string, timeout: number) {
    let api = new Network(baseUrl, timeout);
    this.api = api.apiInstance;
  }
  videoDetails(videoId: number) {
    let instanse =  this.api.get(URL.VIDEO_DETAILS + `?videoId=${videoId}`,{ validateStatus: false });
    return instanse;
  }
  videoRecomendations() {
    return this.api.get(URL.VIDEO_RECOMENDATIONS + "?userId=1");
  }
  commentsList(videoId: number) {
    return this.api.get(URL.COMMENTS_LIST + `?videoId=${videoId}`);
  }
}
export default Api;
