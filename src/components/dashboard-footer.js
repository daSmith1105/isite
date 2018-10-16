import React from 'react';
import Back from './back-btn';
import TimelapseBtn from './timelapse-btn';
import EventsBtn from './events-btn';
import OptionsBtn from './options-btn';
import '../App.css'

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: ''
        }
    }
    
        render() {
            
            return (
                <div className="dash-footer">
                    <Back />
                    <TimelapseBtn />
                    <EventsBtn vidArr={this.props.vids} />
                    <OptionsBtn snapIt={ this.props } />
                </div>
            )
        }
}

export default Footer;