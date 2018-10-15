import React from 'react';
import '../App.css';

class Events extends React.Component {

    render() {
        const map = Object.values(this.props.vidArr).map(video => {
        return (
            <li className="video-event-li" key={video.bID}>
                <p className="video-timestamp">{video.sTimeStamp}</p>
                <p className="video-duration">{video.bDuration}</p>
        </li> )
    })

    return( 
        <div className="events-wrapper">
                <div className="events-container">
                    <button className="cancel" onClick={this.props.close}>&#x274C;</button>
                    <h1>Events</h1>
                    <ul className="video-container">
                        {map}
                    </ul>
                </div>
            </div>
       
        )}
}


export default Events;