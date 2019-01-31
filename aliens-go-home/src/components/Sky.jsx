import React from 'react';
import {skyAndGroundWidth} from '../utils/constants';

const Sky = () => {
    const skyStyle = {
        fill: '#30abef',
    };

    //const skyWidth = 5000;
    const gameHeight = 1200;

    return (
        <rect
            style={skyStyle}
            //x={skyWidth / -2}
            x={skyAndGroundWidth / -2}
            y={100 - gameHeight}
            //width={skyWidth}
            width={skyAndGroundWidth}
            height={gameHeight}
        />
    );
};

export default Sky;