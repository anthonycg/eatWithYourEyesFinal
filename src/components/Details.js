import React from "react";


const Details = (props) => {
    const {currentImage, photo, setPhotos} = props;
    return (
        <div>
            <div><p>hello from details</p></div>
                <div>
                    <h1>{currentImage.id}</h1>
                {/* <h1>{photo.id}</h1> */}
                <img src={currentImage} alt="large pic of search item"></img>
                </div>
        </div>
    )
}

export default Details;