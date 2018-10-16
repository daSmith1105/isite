import React from 'react';
import '../App.css';


const OptionsBtn = (props) => {

// props.snapIt.defaultImg
// props.snapIt.focusImg

    return(
        <div className="btn-group">
            <div className="snap">
                <img className="snap-btn" 
                id="test"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png"
                alt="snapshot"
                onClick={() => console.log(`${props.snapIt.defaultImg}:${props.snapIt.focusImg}`)}
                />
        </div>
            <p className="desc">Options</p>
        </div>
    )
}

export default OptionsBtn;