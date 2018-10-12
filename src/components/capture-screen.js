import React from 'react';
import html2canvas from 'html2canvas';

const Capture = (props) => {
        html2canvas(document.getElementById('test')).then(function(canvas) {
            document.getElementById('show').append(canvas);
       });
    }

export default Capture;