import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const updateTuitHandler = (tuit) => {
        dispatch(updateTuitThunk(tuit));
    };
    return(
        <div className="row mt-3">
            <div className="col">
                <i className="bi bi-chat me-2"></i>
                {tuit.replies}
            </div>
            <div className="col">
                <i className="bi bi-arrow-repeat me-2"></i>
                {tuit.retuits}
            </div>
            <div className="col">
                {
                    tuit.liked &&
                    <i className="bi bi-heart-fill me-2 text-danger"
                       onClick={() => updateTuitHandler({
                           ...tuit,
                           liked: false,
                           likes: tuit.likes - 1
                       })}></i>
                }
                {
                    !tuit.liked &&
                    <i className="bi bi-heart me-2"
                       onClick={() => updateTuitHandler({
                           ...tuit,
                           liked: true,
                           likes: tuit.likes + 1
                       })}></i>
                }
                {tuit.likes}
            </div>
            <div className="col">
                {
                    tuit.disliked &&
                    <i className="bi bi-hand-thumbs-down-fill me-2 text-danger"
                       onClick={() => updateTuitHandler({
                           ...tuit,
                           disliked: false,
                           dislikes: tuit.dislikes - 1
                       })}></i>
                }
                {
                    !tuit.disliked &&
                    <i className="bi bi-hand-thumbs-down me-2"
                       onClick={() => updateTuitHandler({
                           ...tuit,
                           disliked: true,
                           dislikes: tuit.dislikes + 1
                       })}></i>
                }
                {tuit.dislikes}
            </div>
            <div className="col">
                <i className="bi bi-share"></i>
            </div>
        </div>
    )
}
export default TuitStats;