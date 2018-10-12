import React from 'react';
import '../App.css';

const Play = (props) => {
    return(
        <div className="btn-group">
            <div className="play">
                <img className="play-btn"
                    src="https://static.thenounproject.com/png/1127658-200.png" 
                    alt="timelapse"
                    />
            </div>
                <p className="desc">Timelapse</p>
        </div>
    )
}

export default Play;