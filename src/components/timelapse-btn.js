import React from 'react';
import Timelapse from './timelapse';
import '../App.css';

class TimelapseBtn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showPicker: false
        }
        this.closePicker = this.closePicker.bind(this);
    }

    closePicker() {
        this.setState({
            showPicker: false
        })
    }

        render() {

        return(
            <div className="btn-group">
                <div className="play">
                    <img className="play-btn"
                        src="https://static.thenounproject.com/png/1127658-200.png" 
                        alt="timelapse"
                        onClick={() => this.setState({ showPicker: true })}
                        />
                </div>
                    <p className="desc">Timelapse</p>
                    <div>
                        { this.state.showPicker ? <Timelapse close={this.closePicker} images={this.props.imgArr} siteName={this.props.siteName} /> : null }
                    </div>
            </div>

        )
    }
}

export default TimelapseBtn;