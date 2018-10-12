import React from 'react';
import '../App.css';

const Loading = () => {
    return(
        <div class="loading-overlay">
            <div class="loading-container">
                <img className="loadimg-img" src="https://i.gifer.com/4V0b.gif" alt="loading" />
            </div>
        </div>
    )
}

export default Loading;