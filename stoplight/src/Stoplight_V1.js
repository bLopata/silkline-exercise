import React, { useState, useEffect } from 'react';
import './Stoplight.css';

const Stoplight = () => {
    const [activeLight, setActiveLight] = useState('green');

    useEffect(() => {
        const cycleLights = () => {
            if (activeLight === 'green') {
                setTimeout(() => setActiveLight('yellow'), 5000);
            } else if (activeLight === 'yellow') {
                setTimeout(() => setActiveLight('red'), 1000);
            } else if (activeLight === 'red') {
                setTimeout(() => setActiveLight('green'), 2000);
            }
        };

        cycleLights();
    }, [activeLight]);

    return (
        <div className="stoplight">
            <div className={`light red ${activeLight === 'red' ? 'active' : ''}`}></div>
            <div className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}></div>
            <div className={`light green ${activeLight === 'green' ? 'active' : ''}`}></div>
        </div>
    );
};

export default Stoplight;
