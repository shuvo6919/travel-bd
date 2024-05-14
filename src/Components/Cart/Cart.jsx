import { useContext } from "react";
import { CartsContext } from "../../Providers/CartsProvider";
import { getStoredData } from "../../JSfiles/cart";
import { AuthContext } from "../../Providers/AuthProvider";

import "./cart.css";
import { useLoaderData } from "react-router-dom";
import CartCard from "../CartCard/CartCard";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const allPlaces = useLoaderData();
  const email = user.email;
  const storedData = getStoredData(email);
  let carts = [];
  let total = 0;
  for (const place of allPlaces) {
    for (const data of storedData) {
      if (place.id === parseInt(data.currentID)) {
        const x = { place, data };
        carts.push(x);
        total += data.totalCost;
      }
    }
  }

  return (
    <div>
      <img
        className="cart-cover-img"
        src="https://i.imghippo.com/files/aEt3y1714890422.jpg"
        alt=""
      />
      <div className="cart-container">
        <h1>Your Cart</h1>
        <div className="cart-card-container">
          {carts.map((cart, idx) => (
            <CartCard key={idx} cart={cart}></CartCard>
          ))}
        </div>
        <div className="total">
          <h3>Total Cost : {total}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
