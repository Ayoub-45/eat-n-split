import React, { useState } from "react";
import { FriendList } from "./FriendList";
import { Button } from "./Button";
import { FormAddFriend } from "./FormAddFriend";
import { FormSplitBill } from "./FormSplitBill";
import { initialFriends } from "../initialFriends";
export default function App() {
    const [displayForm, setDisplayForm] = useState(false);
    const [friends, setFriends] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);
    function handleSelectedFriend(friend) {
        setSelectedFriend((selected)=>selected?.id===friend.id?null:friend);
        setDisplayForm(false)
    }
    return (
        <div className="app">
            <div className="sidebar">
                <FriendList
                    friends={friends}
                    onSelectedFriend={handleSelectedFriend}
                    selectedFriend={selectedFriend}
                />
                {displayForm && (
                    <div>
                        <FormAddFriend
                            friends={friends}
                            onSetFriends={setFriends}
                            onDisplayForm={setDisplayForm}
                        />
                    </div>
                )}
                <Button
                    onClick={() => setDisplayForm((prevState) => !prevState)}
                >
                    {displayForm ? "Close" : "Add friend"}
                </Button>
            </div>
            {selectedFriend && (
                <FormSplitBill selectedFriend={selectedFriend} />
            )}
        </div>
    );
}
