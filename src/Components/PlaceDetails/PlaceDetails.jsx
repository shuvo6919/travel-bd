import { useLoaderData, useParams } from "react-router-dom";
import "./placeDetails.css";
import { TiTick } from "react-icons/ti";
import { useContext, useEffect, useState } from "react";
import { CartsContext } from "../../Providers/CartsProvider";
import { AuthContext } from "../../Providers/AuthProvider";

const PlaceDetails = () => {
  const { user } = useContext(AuthContext);
  const { handleAddToCart } = useContext(CartsContext);
  const places = useLoaderData();
  const currentID = useParams().userID;
  const currentPlace = places.find((place) => place.id === parseInt(currentID));
  const { img_url, name, description, travel_cost } = currentPlace;
  const [days, setDays] = useState(1);
  const [costPerDay, setCostPerDay] = useState(travel_cost);
  const [totalCost, setTotalCost] = useState(costPerDay);
  const handleDayChange = (e) => {
    e.preventDefault();
    const day = e.target.value;
    setDays(day);
    setTotalCost(costPerDay * day);
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".package");
    elements.forEach((element, idx) => {
      element.addEventListener("click", () => {
        elements.forEach((el) => {
          el.classList.remove("active");
        });

        if (idx === 1) {
          setCostPerDay(travel_cost + (travel_cost * 50) / 100);
        } else if (idx === 2) {
          setCostPerDay(travel_cost * 2);
        } else if (idx === 0) {
          setCostPerDay(travel_cost);
        }
        element.classList.add("active");
      });
    });
  }, [costPerDay]);

  useEffect(() => {
    setTotalCost(costPerDay * days);
  }, [costPerDay, days]);

  return (
    <div className="details-container">
      <div className="details-info">
        <img src={img_url} alt="" />
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="packages-container">
        <div className="packages">
          <div className="package active">
            <h3>Basic</h3>
            <div className="facilities">
              <p>
                <TiTick className="tick-icon" /> Accommodation in standard
                hotels
              </p>
              <p>
                <TiTick className="tick-icon" /> Basic transportation
                arrangements
              </p>
            </div>
            <h3>$ {travel_cost} per day</h3>
          </div>
          <div className="package">
            <h3>Standard</h3>
            <div className="facilities">
              <p>
                <TiTick className="tick-icon" /> Accommodation in mid-range
                hotels
              </p>
              <p>
                <TiTick className="tick-icon" /> Airport transfers
              </p>
              <p>
                <TiTick className="tick-icon" /> Daily breakfast included
              </p>
            </div>
            <h3>$ {travel_cost + (travel_cost * 50) / 100} per day</h3>
          </div>
          <div className="package">
            <h3>Premium</h3>
            <div className="facilities">
              <p>
                <TiTick className="tick-icon" /> Accommodation in luxury hotels
                or resorts
              </p>
              <p>
                <TiTick className="tick-icon" /> Airport transfers with VIP
                service
              </p>
              <p>
                <TiTick className="tick-icon" /> Daily breakfast and one
                complimentary dinner
              </p>
              <p>
                <TiTick className="tick-icon" /> Private transportation for
                sightseeing
              </p>
              <p>
                <TiTick className="tick-icon" /> Access to exclusive guided
                tours and experiences
              </p>
            </div>
            <h3>$ {travel_cost * 2} per day</h3>
          </div>
        </div>
        <div className="total-cost">
          <div>
            <h3>Total Cost : $ {totalCost}</h3>
            <h4>Set Day : {days}</h4>
            <input
              onChange={handleDayChange}
              type="range"
              name="day"
              value={days}
              max="7"
              min="1"
            />
          </div>
          <button
            onClick={() => handleAddToCart(user, currentID, totalCost, days)}
            className="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
