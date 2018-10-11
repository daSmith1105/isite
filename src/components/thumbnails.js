import React from 'react';

const Thumbnails = (props) => {

    const { siteName, imgData, vidData, onSwap } = props;
    const MapImages = () => 
            Object.values(imgData).map(image => {
                let thumb = `https://${siteName}.dividia.net/${image.sThumbnail}`;
                let fullImg = `https://${siteName}.dividia.net/${image.sImage}`;
            return (
                <li className="thumb-li" key={image.bID}>
                    <img className="thumb-img" src={thumb} alt="img" name={fullImg} onClick={onSwap} />
                    <br />
                    <span className="thumb-time">{image.sTimeStamp}</span>
                </li>)
            }); 
    return(
        <div>
            <ul className="thumb-container t-align-center"> 
                <MapImages />
            </ul>
        </div>
    )
}

export default Thumbnails;