const WhoToFollowListItem = who => {
    return(`
    <li class="list-group-item d-flex">
                <img src=${who.avatarIcon}>
                <div class="ms-0 ms-xl-2">
                    <span class="d-block fw-bold">${who.userName} <i class="fas fa-check-square"></i></span>
                    <span>@"${who.handle}"</span>
                </div>
                <button type="button" class="btn btn-primary rounded-pill ms-auto me-0 wd-follow">Follow</button>
            </li>
    `);
}

export default WhoToFollowListItem;