import React from "react";
import postsArray from './posts.json';
import PostSummaryItem
    from "./post-summary-item";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(({_id, topic, userName, title, time, image}) =>
                    <PostSummaryItem
                        key={_id}
                        topic={topic}
                        userName={userName}
                        title={title}
                        time={time}
                        image={image}
                /> )
            }
        </ul>
    );
};
export default PostSummaryList;