// FeedAnimationPage.js
import React, { useEffect, useState } from 'react';
import '../CSSComponents/AnimationPage.css';


// Array of GIFs
const gifs = [
    require('../PusheenImages/feeding1.gif'),
    require('../PusheenImages/feeding2.gif'),
    require('../PusheenImages/feeding3.gif'),
];

function FeedAnimationPage({ onAnimationComplete }) {
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
        }, 1000);

        // Clear the timer when the component unmounts
        return () => clearTimeout(timer);
    }, [onAnimationComplete]); // Dependency array ensures the effect only runs once

    return (
        <div className="animation-page">
        {randomGif && <img src={randomGif} alt="Feeding Animation" />}
        <h2>Feeding Pusheen!</h2>
        </div>
    );
}

export default FeedAnimationPage;