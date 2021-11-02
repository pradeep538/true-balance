import { useEffect } from "react";
import { connect } from "react-redux";
import Comments from "../../../entities/Comments";
import VideoDetails from "../../../entities/VideoDetails";
import VideoRecomendations from "../../../entities/VideoRecomendations";
import { getVideoComments } from "../../../usecases/views/getVideoComments";
import { getVideoDetails } from "../../../usecases/views/getVideoDetails";
import { getVideoRecomendations } from "../../../usecases/views/getVideoRecomendations";
import CommentsView from "../../components/Comments/Comments";
import Recomendations from "../../components/Recomendations/Recomendations";
import VideoView from "../../components/VideoDetails/VideoView";

interface Props {
  storeData: {
    videoDetails: VideoDetails;
    videoRecomendations: VideoRecomendations;
    comments: Comments[];
  };
}
const AppContainer = (props: Props) => {
  let {storeData} = props;
  useEffect(()=> {
    /* fetch video to play and recomendations */
    getVideoDetails(1);
    getVideoRecomendations(1);

  },[])
  useEffect(()=>{
    console.log("storeData==>",storeData);
  },[storeData])

  const fetchComments = ()=>{
    getVideoComments(1);
  }
  return (<div>
    <div className="container">
      <VideoView {...storeData.videoDetails}/>
     <CommentsView fetchComments={fetchComments} commentsList={storeData.comments}/>
      <Recomendations VideoRecomendations={storeData.videoRecomendations}/>

    </div>
  </div>);
};
const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    storeData: state.tureBalanceReducer
  };
};
export default connect(mapStateToProps)(AppContainer);
