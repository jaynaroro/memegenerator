import React from "react"
import trollface from "../Images/troll-face.png"


export default function Navbar(){
    return (
        <div className="navbar-component">
                <img className="navbar-img" src={trollface} alt="troll-face"/>
                <h2 className="navbar-title">Meme Generator</h2>
                <p className="navbar-desc">React Course - Project 3</p>
        </div>
    )
}