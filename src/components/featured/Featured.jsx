
import useFetch from "../../hooks/UseFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(`${process.env.REACT_APP_DOMAIN_URL}/hotels/countbycity?cities=egypt,copenhagen,london`);
  return (
    
    <div className="featured">
      {loading? ("Loading please wait!..."):(
        <>
        <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/3889891/pexels-photo-3889891.jpeg?auto=compress&cs=tinysrgb&w=1000"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Egypt</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/416024/pexels-photo-416024.jpeg?auto=compress&cs=tinysrgb&w=1000"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Copenhagen</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&w=1000"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
    
        
        </>
      )}
      </div>
      
  );
};

export default Featured;
