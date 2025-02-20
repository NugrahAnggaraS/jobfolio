/** @format */

import "../styles/rating.css";

function generateStar(totalRating) {
  const stars = [];
  for (let index = 0; index < totalRating; index++) {
    stars.push(<div className="star"></div>);
  }
  return stars;
}

function Rating({ rate,feed }) {
  return (
    <div>
      <div className="rating">
        <div className="stars">{generateStar(rate)}</div>
        <p>{feed}</p>
      </div>
    </div>
  );
}

export default Rating;
