import React from 'react';

const Viewer = (props) => {

    const { focusImg } = props;

    return(
        <div className="viewer-container b-align-center">
            <img className="full-img" src={focusImg} alt="img" />
        </div>
    )
}

export default Viewer;