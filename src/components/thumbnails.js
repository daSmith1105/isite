import React from 'react';
import '../App.css';

class Thumbnails extends React.Component {
    
    render() {
        const { siteName, imgData, onSwap } = this.props;  // will eventually have vidData?

       const map = Object.values(imgData).map(image => {
            let thumb = `https://${siteName}.dividia.net/${image.sThumbnail}`;
            let fullImg = `https://${siteName}.dividia.net/${image.sImage}`;
            let hour = image.sTimeStamp.split('').slice(8, 10).join('');
            let minute = image.sTimeStamp.split('').slice(10, 12).join('');
            let month = image.sTimeStamp.split('').slice(4, 6).join('');
            let day = image.sTimeStamp.split('').slice(6, 8).join('');
            let year = image.sTimeStamp.split('').slice(0, 4).join('');
            let fullDate = `${month}/${day}/${year}`
            let daynight = '';
            switch(hour) {
                case '00': hour = 12; daynight = 'AM';
                    break;
                case '01': hour = 1; daynight = 'AM';
                    break;
                case '02': hour = 2; daynight = 'AM';
                    break;
                case '03': hour = 3; daynight = 'AM';
                    break;
                case '04': hour = 4; daynight = 'AM';
                    break;
                case '05': hour = 5; daynight = 'AM';
                    break;
                case '06': hour = 6; daynight = 'AM';
                    break;
                case '07': hour = 7; daynight = 'AM';
                    break;
                case '08': hour = 8; daynight = 'AM';
                    break;
                case '09': hour = 8; daynight = 'AM';
                    break;
                case '10': daynight = 'AM';
                    break;
                case '11': daynight = 'AM';
                    break;
                case '12':  daynight = 'PM';
                    break;
                case '13': hour = 1; daynight = 'PM';
                    break;
                case '14': hour = 2; daynight = 'PM';
                    break;
                case '15': hour = 3; daynight = 'PM';
                    break;
                case '16': hour = 4; daynight = 'PM';
                    break;
                case '17': hour = 5; daynight = 'PM';
                    break;
                case '18': hour = 6; daynight = 'PM';
                    break;
                case '19': hour = 7; daynight = 'PM';
                    break;
                case '20': hour = 8; daynight = 'PM';
                    break;
                case '21': hour = 9; daynight = 'PM';
                    break;
                case '22': hour = 10; daynight = 'PM';
                    break;
                case '23': hour = 11; daynight = 'PM';
                    break;
                default: hour = image.sTimeStamp.split('').slice(8, 10).join('')
            }

            let thumbTime = `${hour}:${minute} ${daynight}`;  
            let dateAndTime = `${fullDate}   ${thumbTime}`;
            return (
                <li className="thumb-li" key={image.bID}>
                    <img className="thumb-img" 
                         src={thumb} 
                         alt="img" 
                         name={fullImg} 
                         dateTime= {dateAndTime}
                         onClick={onSwap} /> 
                    <br />
                    <span className="thumb-time">{thumbTime}</span>
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