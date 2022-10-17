import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return(`
    <ul id="who-to-follow" class="list-group">
        <li class="list-group-item fw-bold">
            Who to follow
        </li>
        ${who.map((listItem) => WhoToFollowListItem(listItem)).join('')}
    </ul>
    `);
}

export default WhoToFollowList;