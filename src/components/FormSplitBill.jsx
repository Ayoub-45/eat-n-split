import React from "react";
import { Button } from "./Button";
import { useState } from "react";
export function FormSplitBill({selectedFriend,onSplitBill}) {
    const [bill,setBill]=useState("");
    const [expense,setExpense]=useState("")
    const paidByFriend=bill?bill-expense:""
    const [payer,setPayer]=useState("user")
   function handleSubmit(e){
    e.preventDefault();
    if(!bill || !expense) return
    onSplitBill(payer==="user"?paidByFriend:-expense)

   }
    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectedFriend.name}</h2>
            <label>💸Bill</label>
            <input type="text" value={bill } onChange={(e)=>setBill(+e.target.value)}/>
            <label>🙍‍♂️ Your expense</label>
            <input type="text" value={expense} onChange={(e)=>setExpense(+e.target.value>bill?expense:+e.target.value)}/>
            <label>👬 {selectedFriend.name}'s expense</label>
            <input type="text" disabled value={paidByFriend}/>
            <label >🤑 Who is paying the bill?</label>
            <select value={payer} onChange={(e)=>setPayer(e.target.value)}>
                <option value="user">You</option>
                <option value={selectedFriend.name}>{selectedFriend.name}</option>
            </select>
            <Button>Add</Button>
        </form>
    );
}
