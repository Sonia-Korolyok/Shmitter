import Avatar from "./Avatar.jsx";
import {useSelector} from "react-redux";
import {decreaseFollowers, decreaseFollowing, increaseFollowers, increaseFollowing} from "../actions/userAction.js";
import {useDispatch} from 'react-redux';


const Stats = () => {
    const {followers, following} = useSelector(state => state.stats);
    const {name} = useSelector(state => state.user);
    const dispatch = useDispatch();
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className={'stats'}>
                <div onClick={() => dispatch(increaseFollowers())}
                     onContextMenu={(e) => {
                         e.preventDefault();
                         dispatch(decreaseFollowers())
                     }}
                >Followers: {followers}</div>
                <div onClick={() => dispatch(increaseFollowing())}
                     onContextMenu={(e) => {
                         e.preventDefault();
                         dispatch(decreaseFollowing())
                     }}>Following: {following}</div>
            </div>
        </div>
    );
};

export default Stats;