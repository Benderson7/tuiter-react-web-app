import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`      
    <div id="search" class="d-flex mb-2">
        <i id="search-icon" class="position-absolute ms-3 fas fa-search"></i>
        <input type="text" class="form-control rounded-pill ps-5" placeholder="Search Twitter">
            <i id="search-cog" class="ms-3 fas fa-cog fs-5"></i>
    </div>
    <div id="navigation" class="mb-2">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
    </div>
    <div id="for-you">
        <div class="wd-image-overlay position-relative mb-2">
            <img src="../../images/starship-2.jpg" alt="starship">
                <h1 class="position-absolute bottom-0 fs-2 fw-bold text-white">SpaceX's Starship</h1>
        </div>
       ${PostSummaryList()}
   </div>
    `);
}
export default ExploreComponent;

