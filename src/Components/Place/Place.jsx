import "./place.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const Place = ({ place }) => {
  const { id, name, img_url, category_name, travel_cost, description } = place;
  const categoryName = category_name[0].toUpperCase() + category_name.slice(1);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Link to={`/place/${id}`}>
      <div className="place-card">
        <img src={img_url} alt="" />

        <div>
          <h3 className="place-name">{name}</h3>
          <p>
            <IoLocationSharp /> Bangladesh
          </p>
          <div className="category-price">
            <h3>{categoryName}</h3>
            <h3>${travel_cost}</h3>
          </div>
          <p>{description}</p>
          <div>
            <button className="button">Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Place;
