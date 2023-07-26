import React from "react"
export function Button({children,onClick,styleBtn}){
    return <button className="button" onClick={onClick} >{children}</button>
}