import { useEffect, useState } from "react";
import Place from "../Place/Place";
import "./places.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Places = ({ searchResult }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="places-container">
      <h2>Most Visited Places</h2>
      <div className="places">
        {searchResult.map((place) => (
          <Place key={place.id} place={place}></Place>
        ))}
      </div>
    </div>
  );
};

export default Places;
