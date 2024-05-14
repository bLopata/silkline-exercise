import React, { useState, useEffect } from 'react';

const Light = ({ color, isOn }) => (
    <div className={`light ${color}${isOn ? ' active' : ''}`} />
);

const Stoplight = ({ configurations }) => {
    const [selectedConfigIndex, setSelectedConfigIndex] = useState(0);
    const [activeLights, setActiveLights] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const config = configurations[selectedConfigIndex];
        const sequence = config.sequence[currentIndex];
        setActiveLights(sequence.colors);

        const timer = setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % config.sequence.length);
        }, sequence.duration);

        return () => clearTimeout(timer);
    }, [currentIndex, selectedConfigIndex, configurations]);

    return (
        <>
            <select onChange={(e) => {
                setSelectedConfigIndex(Number(e.target.value));
                setCurrentIndex(0);
            }}>
                {configurations.map((config, index) => (
                    <option key={index} value={index}>{config.name}</option>
                ))}
            </select>
            <div className="stoplight">
                {Object.keys(configurations[selectedConfigIndex].lights)
                    .sort((a, b) => configurations[selectedConfigIndex].lights[a].position - configurations[selectedConfigIndex].lights[b].position)
                    .map(key => (
                        <Light key={key} color={key} isOn={activeLights.includes(key)} />
                    ))}
            </div>
        </>
    );
};

export default Stoplight;
