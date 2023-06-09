import React from 'react'

export default function BigPicture() {
    let url = 'https://i.imgur.com/U8tiT5X.png';

    return (
        <div className = "big-picture-container">
        <div className="big-picture">
            <img src = {url} className="background-image"></img>
        </div>
        </div>
    );
}