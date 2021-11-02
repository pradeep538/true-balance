import { useEffect, useState } from "react";
import Comments from "../../../entities/Comments";

type TProps = {
    commentsList: Comments[];
    fetchComments: () => void;
}
const CommentsView = (props: TProps) => {
    const [showComments, setCommentsVisibility] = useState(false);
    const handleCommentsVisibility = (event: any) => {
        if (!showComments) {
            props.fetchComments()
        }
        setCommentsVisibility(!showComments);
    }
    return (
        <div className="comments-lauout">
            <button onClick={handleCommentsVisibility}>{showComments ? "hide comments" : "show Comments"}</button>
            {
                showComments && props.commentsList.map((comments: Comments) => {
                    return (<div key={comments.id} className="comments">
                        {/* <p>comments id:{comments.id}</p> */}
                        <p>messaged By: {comments.messagerName}</p>
                        <p>message: {comments.message}</p>
                    </div>)
                })
            }

        </div>
    )
}

export default CommentsView;