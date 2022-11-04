const NavigationSidebar = () => {
    return(`
    <ul class="list-group mb-2">
        <li class="list-group-item">
            <i class="fab fa-twitter"></i>
        </li>
        <li class="list-group-item">
            <a href="#"><i class="fas fa-home"></i><span class="d-none d-xl-inline"> Home</span></a>
        </li>
        <li class="list-group-item active">
            <a href="#"><i class="fas fa-hashtag"></i><span class="d-none d-xl-inline"> Explore</span></a>
        </li>
        <li class="list-group-item">
            <a href="#"><i class="fas fa-bell"></i><span class="d-none d-xl-inline"> Notifications</span></a>
        </li>
        <li class="list-group-item">
            <a href="#"><i class="fas fa-envelope"></i><span class="d-none d-xl-inline"> Messages</span></a>
        </li>
        <li class="list-group-item">
            <a href="#"><i class="fas fa-bookmark"></i><span class="d-none d-xl-inline"> Bookmarks</span></a>
        </li>
        <li class="list-group-item">
            <a href="#"><i class="fas fa-list-ul"></i><span class="d-none d-xl-inline"> Lists</span></a>
        </li>
        <li class="list-group-item">
            <a href="#"><i class="fas fa-user"></i><span class="d-none d-xl-inline"> Profile</span></a>
        </li>
        <li class="list-group-item">
            <a href="#"><i class="fas fa-ellipsis-h"></i><span class="d-none d-xl-inline"> More</span></a>
        </li>
    </ul>
    <div class="d-grid gap-2">
        <button type="button" class="btn btn-primary rounded-pill">Tweet</button>
    </div>
 `);
}

export default NavigationSidebar;