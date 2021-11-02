import Network from "./network";
import * as URL from "./apiroutes";
import ApiMockTrueBalance from "./api-mock";

/* if (process.env.NODE_ENV === "development") { */
// setup mock data for development env
const apiMockInstance = new ApiMockTrueBalance();
apiMockInstance && apiMockInstance.setUpMock();
/* } */
class Api {
  api: any;
  constructor(baseUrl: string, timeout: number) {
    let api = new Network(baseUrl, timeout);
    this.api = api.apiInstance;
  }
  videoDetails(videoId: number) {
    return this.api.get(URL.VIDEO_DETAILS + `?videoId=${videoId}`);
  }
  videoRecomendations() {
    return this.api.get(URL.VIDEO_RECOMENDATIONS + "?userId=1");
  }
  commentsList(videoId: number) {
    return this.api.get(URL.COMMENTS_LIST + `?videoId=${videoId}`);
  }
}
export default Api;
