import React from 'react';

const Thumbnails = (props) => {

    const { siteName, imgData, onSwap } = props;  // will eventually have vidData?
    const MapImages = () => 
            Object.values(imgData).map(image => {
                let thumb = `https://${siteName}.dividia.net/${image.sThumbnail}`;
                let fullImg = `https://${siteName}.dividia.net/${image.sImage}`;
                // let time = moment(image.sTimeStamp, "HH:mm:ss").format("hh:mm A"); -- currently returng the same time
                // console.log(time);
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