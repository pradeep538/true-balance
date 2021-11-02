import VideoInfo from "../../../entities/VideoInfo";
import VideoRecomendations from "../../../entities/VideoRecomendations";

type TProps = {
    VideoRecomendations: VideoRecomendations
}
const Recomendations = (props: TProps) => {
    return (
        <div>
            <div className="recomendation-layout">
                <div>
                    Recomentation for you.
                </div>
                {
                    props.VideoRecomendations.videoList.map((thumbnail: VideoInfo) => {
                        return (
                            <div className="rec-thumbnail">
                                <p>thumbnail Goes here</p>
                                <p>title: {thumbnail.title}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>)

}

export default Recomendations;