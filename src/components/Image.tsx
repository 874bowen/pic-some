import React from "react"

function Image({className, url}: any) {
    return (
        <div className={`${className} image-container`}>
            <img src={url} className="image-grid"/>
        </div>
    )
}

export default Image
