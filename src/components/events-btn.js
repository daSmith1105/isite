import React from 'react';
import Events from './events';
import '../App.css';

class EventsBtn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showEvents: false
        }
        this.closeEvents = this.closeEvents.bind(this);
    }

    closeEvents() {
        this.setState({
            showEvents: false
        })
    }
    render() {

    return(
        <div className="btn-group">
            <div className="events">
                <img className="events-btn" 
                    src="https://cdn0.iconfinder.com/data/icons/seo-and-internet-marketing-set-2/100/Video_Search-512.png"
                    alt="video events"
                    onClick={() => this.setState({ showEvents: true })} />
            </div>
                    <p className="desc">Events</p>
            <div>
            { this.state.showEvents ? <Events close={this.closeEvents} vidArr={this.props.vidArr} /> : null }
            </div>
        </div>
        )
    }   
}

export default EventsBtn;