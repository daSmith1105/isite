import React from 'react';
import history from '../history';
import '../App.css';

const Back = () => {
    return(
        <div className="btn-group">
        <div className="back">
            <img className="back-btn"
                 src="https://image.flaticon.com/icons/png/512/19/19927.png" 
                 alt="back"
                 onClick={() => history.push('/')}
                 />
        </div>
                 <p className="desc">Back</p>
        </div>
    )
}

export default Back;