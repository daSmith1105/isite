import React from 'react';
import Back from './back-btn';
import Play from './play-btn';
import Events from './events-btn';
import Snap from './snap-btn';
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
                    <Play />
                    <Events />
                    <Snap snapIt={ this.props } />
                </div>
            )
        }
}

export default Footer;