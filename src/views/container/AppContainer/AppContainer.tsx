import { connect } from "react-redux";
import Comments from "../../../entities/Comments";
import VideoDetails from "../../../entities/VideoDetails";
import VideoRecomendations from "../../../entities/VideoRecomendations";

interface Props {
  storeData: {
    videoDetails: VideoDetails;
    videoRecomendations: VideoRecomendations;
    comments: Comments[];
  };
}
const AppContainer = (props: Props) => {
  return <div>Hi this is true balance</div>;
};
const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    storeData: state.trelloReducer
  };
};
export default connect(mapStateToProps)(AppContainer);
