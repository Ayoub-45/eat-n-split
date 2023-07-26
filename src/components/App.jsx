import React, { useState } from "react";
import { FriendList } from "./FriendList";
import { Button } from "./Button";
import { FormAddFriend } from "./FormAddFriend";
import { FormSplitBill } from "./FormSplitBill";
import { initialFriends } from "../initialFriends";
export default function App() {
    const [displayForm, setDisplayForm] = useState(false);
    const [friends,setFriends]=useState(initialFriends)
    return (
        <div className="app">
            <div className="sidebar">
                <FriendList friends={friends}/>
                {displayForm && (
                    <div>
                        <FormAddFriend friends={friends} onSetFriends={setFriends} onDisplayForm={setDisplayForm}/>
                    </div>
                )}
                <Button
                    onClick={() => setDisplayForm((prevState) => !prevState)}
                >
                    {displayForm ? "Close" : "Add friend"}
                </Button>
            </div>
            <FormSplitBill />
        </div>
    );
}
