import React from 'react';

const Viewer = (props) => {

    const { focusImg, defaultImg, timeStamp } = props;
    console.log(timeStamp);
    return(
        <div className="viewer-container b-align-center">
            {(focusImg === '') ?  <img className="full-img" src={defaultImg} alt="img" /> :
                <img className="full-img" src={focusImg} alt="img" /> 
            }
             <p className="viewer-img-time">{timeStamp}</p>
        </div>
    )
}

export default Viewer;