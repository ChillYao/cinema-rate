/* eslint-disable react/prop-types */
import React, { useState, useEffect, Fragment, useRef } from 'react';
import './Rating.scss';

const Rating = (props) => {
  const { rating, totalStars } = props;
  const [numberOfstars, setNumberOfStars] = useState();
  const ratingRef = useRef();

  useEffect(() => {
    const starsArray = [...Array(totalStars).keys()].map((i) => i + 1);
    setNumberOfStars(starsArray);
    let percentage;
    if (rating <= 5) {
      percentage = (rating / 5) * 100;
    } else {
      percentage = (rating / 10) * 100;
    }
    const startPercentage = `${Math.floor(percentage)}%`;
    console.log(rating);
    ratingRef.current.style.width = startPercentage;
  }, [rating, totalStars]);
  return (
    <div className="star-rating">
      <div className="back-stars">
        {numberOfstars &&
          numberOfstars.map((i) => (
            <Fragment key={i}>
              <i className="fa fa-star" aria-hidden="true"></i>
            </Fragment>
          ))}

        <div className="front-stars" ref={ratingRef}>
          {numberOfstars &&
            numberOfstars.map((i) => (
              <Fragment key={i}>
                <i className="fa fa-star" aria-hidden="true"></i>
              </Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
