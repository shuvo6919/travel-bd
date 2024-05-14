// import cover from "../../../src/assets/images/places/home cover-1.jpg";
import video from "../../../src/assets/videos/23011-332483109_small.mp4";
import "./home.css";
import { FaSearch } from "react-icons/fa";
import Marquee from "react-fast-marquee";

import img1 from "../../../src/assets/images/places/khaiachara waterfall.jpg";
import img2 from "../../../src/assets/images/places/bandarban.jpg";
import img3 from "../../../src/assets/images/places/cox's bazar.jpg";
import img4 from "../../../src/assets/images/places/maheshkhali.jpg";
import img5 from "../../../src/assets/images/places/panchagar.jpg";
import Places from "../Places/Places";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    fetch("places.json")
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
        setSearchResult(data);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedField = document.getElementById("search-box");
    let searchedValue = searchedField.value;
    searchedValue = searchedValue.toLowerCase();
    const x = places.filter((place) => place.category_name === searchedValue);
    setSearchResult(x);
  };
  return (
    <div>
      <div className="cover-container">
        <div className="overlay"></div>
        <video
          className="cover-video"
          src={video}
          muted
          loop
          autoPlay
          type="video/mp4"
        ></video>
        <div className="cover-element-container">
          <h1 className="title">Search Your Holiday</h1>
          <form onSubmit={handleSearch} className="search-box-container">
            <input
              className="search-box"
              type="text"
              name="search"
              id="search-box"
            />
            <FaSearch onClick={handleSearch} className="search-icon"></FaSearch>
          </form>
          <Marquee pauseOnHover className="breaking-news">
            {places.map((place) => (
              <Link
                key={place.id}
                to={`/place/${place.id}`}
                className="marque-link"
              >
                <img src={place.img_url} alt="" />
              </Link>
            ))}
          </Marquee>
        </div>
      </div>
      <Places searchResult={searchResult}></Places>
    </div>
  );
};

export default Home;
