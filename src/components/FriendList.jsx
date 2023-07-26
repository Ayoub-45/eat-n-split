import React from "react";
import { Friend } from "./Friend";
export function FriendList({friends}) {
    return (
        <ul>
            {friends.map((friend) => {
                return <Friend friend={friend} key={friend.id} />;
            })}
        </ul>
    );
}
