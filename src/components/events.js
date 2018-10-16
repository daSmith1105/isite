import React from 'react';
import '../App.css';

class Events extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 1
        }

        this.move = this.move.bind(this);
    }


    move(e) {
        var target = e.currentTarget;
        console.log(target);
        var vidId = e.currentTarget.name;
        var elem = document.getElementById(`progress-bar-${vidId}`);    
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            target.className = 'retrieved';
            target.innerHTML = "Watch";
            
          } else {
            width++;
            elem.style.width = width + '%';
           let percentage = document.getElementById(`percentage-${vidId}`);
           percentage.innerHTML = elem.style.width;
          }
        }
    }

    render() {

        const map = Object.values(this.props.vidArr).map(video => {
            let hour = video.sTimeStamp.split('').slice(8, 10).join('');
            let minute = video.sTimeStamp.split('').slice(10, 12).join('');
            let month = video.sTimeStamp.split('').slice(4, 6).join('');
            let day = video.sTimeStamp.split('').slice(6, 8).join('');
            let year = video.sTimeStamp.split('').slice(0, 4).join('');
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
                default: hour = video.sTimeStamp.split('').slice(8, 10).join('')
            }

            let thumbTime = `${hour}:${minute} ${daynight}`;  
            let dateAndTime = `${fullDate}   ${thumbTime}`;
            return (
                <li className="video-event-li" key={video.bID}>
                    <p className="video-timestamp">{dateAndTime}</p>
                    <div className="progress-block">
                        <div id="progress-bar-container">
                            <div id={`progress-bar-${video.bID}`} className="progress-bar"></div> 
                        </div>
                        <p id={`percentage-${video.bID}`} className="percentage">0%</p>  
                    </div>
                    <button className="download-btn"
                            name={video.bID}
                            onClick={this.move}>Retrieve</button>
                </li> )
            });

    return( 
        <div className="events-wrapper">
                <div className="events-container">
                    <button className="cancel" onClick={this.props.close}><span role="img" aria-label="close">&#x274C;</span></button>
                    <h1>Events</h1>
                    <ul className="video-container">
                        {map}
                    </ul>
                </div>
            </div>
       
        )
    }
}


export default Events;