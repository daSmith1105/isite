import React from 'react';
import '../App.css';


const Snap = (props) => {

// props.snapIt.defaultImg
// props.snapIt.focusImg

    return(
        <div className="btn-group">
            <div className="snap">
                <img className="snap-btn" 
                id="test"
                src="https://static.thenounproject.com/png/28423-200.png"
                alt="snapshot"
                onClick={() => console.log(`${props.snapIt.defaultImg}:${props.snapIt.focusImg}`)}
                />
        </div>
            <p className="desc">Snapshot</p>
        </div>
    )
}

export default Snap;