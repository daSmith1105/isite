import React from 'react'
import '../App.css';

const Snap = (props) => {
    return(
        <div className="btn-group">
            <div className="snap">
                <img className="snap-btn" 
                src="https://static.thenounproject.com/png/28423-200.png"
                alt="snapshot"
                />
        </div>
            <p className="desc">Snapshot</p>
        </div>
    )
}

export default Snap;