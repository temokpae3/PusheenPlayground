// BatheAnimationPage.js
import React, { useEffect, useState } from 'react';
import '../CSSComponents/AnimationPage.css';

// Array of GIFs
const gifs = [
    require('../PusheenImages/bathe1.gif'),
    require('../PusheenImages/bathe2.gif'),
    require('../PusheenImages/bathe3.gif'),
];

// BatheAnimationPage functional component
function BatheAnimationPage({ onAnimationComplete }) {
    const [randomGif, setRandomGif] = useState('');
    
    // Select a random GIF when the component mounts
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * gifs.length);
        setRandomGif(gifs[randomIndex]);
    }, []);

    // Use useEffect to run a callback when the component mounts
    useEffect(() => {
        // Set a timer to call the onAnimationComplete callback after 5 seconds
        const timer = setTimeout(() => {
            onAnimationComplete();
        }, 1500);

        // Clear the timer when the component unmounts
        return () => clearTimeout(timer);
    }, [onAnimationComplete]); // Dependency array ensures the effect only runs once

    return (
        <div className="animation-page">
        {randomGif && <img src={randomGif} alt="Playing Animation" />}
        <h2>Bathe Pusheen!</h2>
        </div>
    );
}

export default BatheAnimationPage;