import React from 'react';

const Viewer = (props) => {

    const { focusImg, defaultImg } = props;

    return(
        <div className="viewer-container b-align-center">
            {(focusImg === '') ?  <img className="full-img" src={defaultImg} alt="img" /> :
                <img className="full-img" src={focusImg} alt="img" /> 
            }
        </div>
    )
}

export default Viewer;