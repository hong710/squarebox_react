import {BsStarFill} from 'react-icons/bs'
import React, { useMemo, useState } from "react";

const Rating = ({ count=5, rating=0, color= {
  filled: "#f5eb3b",
  unfilled: "#DCDCDC",
}, onRating }) => {
  
  
  const [hoverRating, setHoverRating] = useState(0);
  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <BsStarFill
          key={idx}
          className="cursor-pointer"
          onClick={() => onRating(idx)}
          style={{ color: getColor(idx) }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count,getColor]);

  return <div className='flex'>{starRating}</div>;
};



export default Rating;