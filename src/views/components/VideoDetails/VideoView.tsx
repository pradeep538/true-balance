type TProps = {
    title: string;
    description: string;
    length: string;
    url: string;
}
const VideoView = (props: TProps) => {
    return (
        <div>
            <div className="player-layout">
                <p>Video Goes here</p>
                <p>title: {props.title}</p>
                <p>description: {props.description}</p>
                <p>URL: {props.url}</p>
            </div>
        </div>)

}

export default VideoView;