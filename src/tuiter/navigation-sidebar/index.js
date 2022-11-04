import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <div className="list-group-item">
                <i className="bi bi-twitter"> </i>
                <a href="./" className="d-none d-xl-inline">Tuiter</a>
            </div>
            <div className="list-group-item">
                <i className="bi bi-house-fill"> </i>
                <a href="./" className={`d-none d-xl-inline
                    ${active === 'home'?'active':''}`}>
                    Home
                </a>
            </div>
            <div className="list-group-item">
                <i className="bi bi-hash"> </i>
                <a href="./" className={`d-none d-xl-inline
                    ${active === 'explore'?'active':''}`}>
                    Explore
                </a>
            </div>
            <div className="list-group-item">
                <i className="bi bi-bell-fill"> </i>
                <a href="./" className={`d-none d-xl-inline
                    ${active === 'notifications'?'active':''}`}>
                    Notifications
                </a>
            </div>
            <div className="list-group-item">
                <i className="bi bi-envelope-fill"> </i>
                <a href="./" className={`d-none d-xl-inline
                    ${active === 'messages'?'active':''}`}>
                    Messages
                </a>
            </div>
            <div className="list-group-item">
                <i className="bi bi-bookmark-fill"> </i>
                <a href="./" className={`d-none d-xl-inline
                    ${active === 'bookmarks'?'active':''}`}>
                    Bookmarks
                </a>
            </div>
            <div className="list-group-item">
                <i className="bi bi-list-ul"> </i>
                <a href="./" className={`d-none d-xl-inline
                    ${active === 'lists'?'active':''}`}>
                    Lists
                </a>
            </div>
            <div className="list-group-item">
                <i className="bi bi-person-fill"> </i>
                <a href="./" className={`d-none d-xl-inline
                    ${active === 'profile'?'active':''}`}>
                    Profile
                </a>
            </div>
            <div className="list-group-item">
                <i className="bi bi-three-dots"> </i>
                <a href="./" className={`d-none d-xl-inline
                    ${active === 'more'?'active':''}`}>
                    More
                </a>
            </div>
        </div>
    );
};
export default NavigationSidebar;