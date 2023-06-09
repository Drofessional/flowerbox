import React from 'react'

export default function SmallPicture({ imageData }) {
    return (
        <div className="small-picture" >
          <img src = {imageData.image} className="post-image"></img>
            <p>{imageData.name} - ${imageData.price}</p>
        </div>
    );
}
