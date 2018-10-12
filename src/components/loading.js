import React from 'react';
import '../App.css';

const Loading = () => {
    return(
        <div className="loading-overlay">
            <div className="loading-container">
                <img className="loadimg-img" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif" alt="loading" />
            </div>
        </div>
    )
}

export default Loading;