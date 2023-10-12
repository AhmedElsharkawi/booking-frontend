import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
 
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        
        <span className="siDistance">{item.distance}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          {item.desc}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
        {item.rating && <button>{item.rating}</button>} 
              {item.rating === 5 && <span>Excellent</span>}
              {item.rating === 4 && <span>Very Good</span>}
              {item.rating === 3 && <span>Good</span>}
              {item.rating === 2 && <span>Fair</span>}
              {item.rating === 1 && <span>Not Recommended</span>}
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestprice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`} >
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
