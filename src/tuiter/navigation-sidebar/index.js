import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <div className="list-group-item">
                <i className="bi bi-twitter"> </i>
                <div className="d-none d-xl-inline">Tuiter</div>
            </div>
            <Link to="/tuiter" className={`list-group-item ${!active?'active':''}`}>
                <i className="bi bi-house-door-fill me-2"></i>
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash me-2"></i>
                Explore
            </Link>
            <Link to="/tuiter/notifications" className={`list-group-item ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill me-2"></i>
                Notifications
            </Link>
            <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill me-2"></i>
                Messages
            </Link>
            <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill me-2"></i>
                Bookmarks
            </Link>
            <Link to="/tuiter/lists" className={`list-group-item ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul me-2"></i>
                Lists
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill me-2"></i>
                Profile
            </Link>
            <Link to="/tuiter/more" className={`list-group-item ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots me-2"></i>
                More
            </Link>
        </div>
    );
};
export default NavigationSidebar;