import React, { useState, useEffect } from 'react';
import ReactStars from 'react-stars';
import '../App.css';

const rating = ({ movie }) => {

  const storageKey = `userRating_${movie.episode_id}`;

  const [userRating, setUserRating] = useState(0);


  useEffect(() => {
    const storedRating = localStorage.getItem(storageKey);
    if (storedRating) {
      setUserRating(parseFloat(storedRating));
    }
  }, [storageKey]);


  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
    localStorage.setItem(storageKey, newRating);
  };

  return (
    <ReactStars
      isHalf={true}
      edit={true}
      className="star starx"
      value={userRating} 
      onChange={handleRatingChange} 
    />
  );
};

export default rating;