import useFetch from "../../hooks/UseFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(`${process.env.REACT_APP_DOMAIN_URL}/hotels?featured=true&min=10&max=250&limit=4`);
  return (
    <div className="fp">
      {loading ? (
        "Loading...!"
      ) : (
        data.map((item) => (
          <div className="fpItem" key={item._id}>
            <img
            src={item.photos[0]}
              alt=""
              className="fpImg"
            />
            <span className="fpName" style={{textTransform:"capitalize"}}>{item.name}</span>
            <span className="fpCity" style={{textTransform:"capitalize"}}>{item.city}</span>
            <span className="fpPrice">starting from ${item.cheapestprice}</span>
            <div className="fpRating">
             {item.rating && <button>{item.rating}</button>} 
              {item.rating == 5 && <span>Excellent</span>}
              {item.rating == 4 && <span>Very Good</span>}
              {item.rating == 3 && <span>Good</span>}
              {item.rating == 2 && <span>Fair</span>}
              {item.rating == 1 && <span>Not Recommended</span>}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FeaturedProperties;
