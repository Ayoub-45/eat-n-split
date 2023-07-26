import { initialFriends } from "../initialFriends";
import { Friend } from "./Friend";
export function FriendList() {
    const friends = initialFriends;
    return (
        <ul>
            {friends.map((friend) => {
                return <Friend friend={friend} key={friend.id} />;
            })}
            <button class="button">Add friend</button>
        </ul>
    );
}
