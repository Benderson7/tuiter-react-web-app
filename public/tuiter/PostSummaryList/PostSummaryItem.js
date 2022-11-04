const PostSummaryItem = post => {
    return(`
        <li class="list-group-item">
            <div class="wd-post row">
                <div class="col-9 col-md-10">
                    <span class="d-block text-secondary">${post.topic}</span>
                    <span class="d-block"><span class="fw-bold">${post.userName}</span> <i class="fas fa-check-square"></i> <span class="text-secondary"> - ${post.time} </span></span>
                    <span class="d-block fw-bold">${post.title}</span>
                </div>
                <div class="col-3 col-md-2">
                    <img src=${post.image} class="rounded">
                </div>
            </div>
        </li>
    `);
}

export default PostSummaryItem;