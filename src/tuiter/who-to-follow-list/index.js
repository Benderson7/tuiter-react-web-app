import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem
    from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Who to follow</h3>
            </li>
            {
                whoArray.map(({_id, userName, handle, avatarIcon}) =>
                    <WhoToFollowListItem
                        key={_id}
                        userName={userName}
                        handle={handle}
                        avatarIcon={avatarIcon}
                    />
                )
            }
        </ul>
    );
};

export default WhoToFollowList;