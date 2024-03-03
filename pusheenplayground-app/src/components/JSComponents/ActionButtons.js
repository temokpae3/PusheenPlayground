import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import '../CSSComponents/ActionButtons.css';
import FeedAnimationPage from './FeedAnimationPage';
import PlayAnimationPage from './PlayAnimationPage';
import BatheAnimationPage from './BatheAnimationPage';
import ButtonImg from '../PusheenImages/ButtonImg.gif';
import loveGif from '../PusheenImages/love.gif';
import happyGif from '../PusheenImages/happy.gif';
import neutralGif from '../PusheenImages/neutral.gif';
import upsetGif from '../PusheenImages/upset.gif';
import hungryGif from '../PusheenImages/hungry.gif';
import smellyGif from '../PusheenImages/smelly.gif';
import sadPng from '../PusheenImages/sad.png';

// ActionButtons functional component
function ActionButtons({ hungerLevel, setHungerLevel, happinessLevel, setHappinessLevel, batheLevel, setBatheLevel }) {
  const feedButtonRef = useRef(null);
  const playButtonRef = useRef(null);
  const batheButtonRef = useRef(null);
  const [showFeedAnimation, setShowFeedAnimation] = useState(false);
  const [showPlayAnimation, setShowPlayAnimation] = useState(false);
  const [showBatheAnimation, setShowBatheAnimation] = useState(false);
  const [currentGif, setCurrentGif] = useState(null);

  useEffect(() => {
    // Determine the current GIF based on hunger, happiness, and bathe levels
    if (hungerLevel >= 80 && happinessLevel >= 80 && batheLevel >= 80) {
      setCurrentGif(loveGif);
    } else if (hungerLevel >= 50 && happinessLevel >= 50 && batheLevel >= 50) {
      setCurrentGif(happyGif);
    } else if (hungerLevel >= 20 && happinessLevel >= 20 && batheLevel >= 20) {
      setCurrentGif(neutralGif);
    } else if (hungerLevel <= 20 && hungerLevel >= 1 && hungerLevel <= happinessLevel && hungerLevel <= batheLevel) {
      setCurrentGif(hungryGif);
    } else if (happinessLevel <= 20 && happinessLevel >= 1 && happinessLevel <= hungerLevel && happinessLevel <= batheLevel) {
      setCurrentGif(upsetGif);
    } else if (batheLevel <= 20 && batheLevel >= 1 && batheLevel <= hungerLevel && batheLevel <= happinessLevel) {
      setCurrentGif(smellyGif);
    } else if (hungerLevel === 0 && happinessLevel === 0 && batheLevel === 0) {
      setCurrentGif(sadPng);
    } else {
      setCurrentGif(sadPng);
    }
  }, [hungerLevel, happinessLevel, batheLevel]);  

  // Function to decrease hunger, happiness, and bathelevels every minute
  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease hunger level by 10 every minute
      setHungerLevel(prevLevel => Math.max(prevLevel - 10, 0));
      // Decrease happiness level by 10 every minute
      setHappinessLevel(prevLevel => Math.max(prevLevel - 10, 0));
      // Decrease bathe level by 10 every minute
      setBatheLevel(prevLevel => Math.max(prevLevel - 10, 0));
    }, 60000); // 60000 milliseconds = 1 minute
    
    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, [setHungerLevel, setHappinessLevel, setBatheLevel]);

  const handleFeed = () => {
    // Add feed functionality here
    if (hungerLevel < 100) {
      setHungerLevel(prevLevel => prevLevel + 10);
      if (feedButtonRef.current) {
        feedButtonRef.current.classList.add("active");
        setTimeout(() => feedButtonRef.current.classList.remove("active"), 300);
      }
      setShowFeedAnimation(true);
    }
  };

  // Callback function to hide the feed animation page
  const onHideFeedAnimation = () => {
    setShowFeedAnimation(false);
  };

  const handlePlay = () => {
    // Add play functionality here
    if (happinessLevel < 100) {
      setHappinessLevel(prevLevel => prevLevel + 10);
      if (playButtonRef.current) {
        playButtonRef.current.classList.add("active");
        setTimeout(() => playButtonRef.current.classList.remove("active"), 300);
      }
      setShowPlayAnimation(true);
    }
  };

  // Callback function to hide the play animation page
  const onHidePlayAnimation = () => {
    setShowPlayAnimation(false);
  };

  const handleBathe = () => {
    // Add bathe functionality here
    if (batheLevel < 100) {
      setBatheLevel(prevLevel => prevLevel + 10);
      if (batheButtonRef.current) {
        batheButtonRef.current.classList.add("active");
        setTimeout(() => batheButtonRef.current.classList.remove("active"), 300);
      }
      setShowBatheAnimation(true);
    }
  };

  // Callback function to hide the bathe animation page
  const onHideBatheAnimation = () => {
    setShowBatheAnimation(false);
  };
  
  return (
    <div className="actions">
      <button ref={feedButtonRef} onClick={handleFeed}>
        <img src={ButtonImg} alt="Button Paw Img" />
        <span>Feed</span>
      </button>
      <button ref={playButtonRef} onClick={handlePlay}>
        <img src={ButtonImg} alt="Button Paw Img" />
        <span>Play</span>
      </button>
      <button ref={batheButtonRef} onClick={handleBathe}>
        <img src={ButtonImg} alt="Button Paw Img" />
        <span>Bathe</span>
      </button>
      {showFeedAnimation && <FeedAnimationPage onAnimationComplete={onHideFeedAnimation} />}
      {showPlayAnimation && <PlayAnimationPage onAnimationComplete={onHidePlayAnimation} />}
      {showBatheAnimation && <BatheAnimationPage onAnimationComplete={onHideBatheAnimation} />}
      {currentGif && 
      <img 
        src={currentGif} 
        alt="Pusheen Gif" 
        className="gif-image" 
        style={{
          position: 'absolute',
          top: '26.5%',
          left: '50%',
          transform: 'translate(-10%, 70%)',
          maxWidth: '80%',
          maxHeight: '80%',
          height: 'auto',
        }}
      />
      }
    </div>
  );
}

export default ActionButtons;