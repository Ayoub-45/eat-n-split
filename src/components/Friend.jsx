import React from "react";
import { Button } from "./Button";
export function Friend({ friend, selectedFriend, onSelectedFriend }) {
    let isSelected=false
    if (selectedFriend){
        isSelected=selectedFriend.id===friend.id
    }
    return (
        <li className={isSelected?"selected":""}>
            <img src={friend.image} alt="friend" />
            <h3>{friend.name}</h3>
            {friend.balance < 0 ? (
                <p className="red">
                    You owe {friend.name} {Math.abs(friend.balance)}€
                </p>
            ) : friend.balance === 0 ? (
                <p>You and {friend.name} are even</p>
            ) : (
                <p className="green">
                    {" "}
                    You owe {friend.name} {friend.balance} €
                </p>
            )}
            <Button onClick={() => onSelectedFriend(friend)}>{isSelected?"Close":"Select"}</Button>
        </li>
    );
}
