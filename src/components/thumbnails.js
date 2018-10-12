import React from 'react';

class Thumbnails extends React.Component {
    
    render() {
        const { siteName, imgData, onSwap } = this.props;  // will eventually have vidData?

       const map = Object.values(imgData).map(image => {
            let thumb = `https://${siteName}.dividia.net/${image.sThumbnail}`;
            let fullImg = `https://${siteName}.dividia.net/${image.sImage}`;
            let hour = image.sTimeStamp.split('').slice(8, 10).join('');
            let minute = image.sTimeStamp.split('').slice(10, 12).join('');

            return (
                <li className="thumb-li" key={image.bID}>
                    <img className="thumb-img" src={thumb} alt="img" name={fullImg} onClick={onSwap} />
                    <br />
                    <span className="thumb-time">{`${hour}:${minute}`}</span>
            </li> )
            })
        return( 
            <div>
                <ul className="thumb-container">
                    {map}
                </ul>
            </div> 
        )}
    }

export default Thumbnails;