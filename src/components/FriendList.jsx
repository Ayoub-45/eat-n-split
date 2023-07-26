import React from "react";
import { Friend } from "./Friend";
export function FriendList({friends,onSelectedFriend,selectedFriend}) {
    return (
        <ul>
            {friends.map((friend) => {
                return <Friend friend={friend} key={friend.id} selectedFriend={selectedFriend} onSelectedFriend={onSelectedFriend}/>;
            })}
        </ul>
    );
}
