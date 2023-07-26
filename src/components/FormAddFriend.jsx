import React, { useState } from "react";
import { Button } from "./Button";
export function FormAddFriend({ friends, onSetFriends,onDisplayForm}) {
    const [friendName, setFriendName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");
    function handleChange(e) {
        const { name, value } = e.target;
        switch (name) {
            case "friendName":
                setFriendName(value);
                break;
            case "image":
                setImage(value);
                break;
            default:
                console.log("err");
                break;
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        const id = crypto.randomUUID();
        const friend = {
            id: id,
            name: friendName,
            image: `${image}?=${id}`,
            balance: 0,
        };
        setFriendName("")
        setImage("https://i.pravatar.cc/48")
        onSetFriends((friends)=>[...friends,friend])
        onDisplayForm(false)
    }
    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
            <label>👬 Friend name</label>
            <input
                type="text"
                name="friendName"
                value={friendName}
                onChange={handleChange}
            />
            <label>🖼️ Image URL</label>
            <input
                type="text"
                name="image"
                value={image}
                onChange={handleChange}
            />
            <Button>Add</Button>
        </form>
    );
}
