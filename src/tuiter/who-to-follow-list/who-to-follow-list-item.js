import React from "react";
const WhoToFollowListItem = (
    {
        userName,
        handle,
        avatarIcon
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} src={`/images/${avatarIcon}`} alt={userName}/>
                </div>
                <div className="col-8">
                    <div className="fw-bold">{userName}</div>
                    <div>@{handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;