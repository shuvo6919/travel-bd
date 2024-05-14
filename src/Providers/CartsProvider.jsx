import { createContext, useEffect, useState } from "react";
import { addToCart } from "../JSfiles/cart";

export const CartsContext = createContext(null);

const CartsProvider = ({ children }) => {
  // const [itemID, setItemID] = useState("something");

  const handleAddToCart = (user, currentID, totalCost, days) => {
    const email = user.email;
    const data = { currentID, totalCost, days };
    addToCart(email, data);
  };

  const cartsInfo = { handleAddToCart };
  return (
    <CartsContext.Provider value={cartsInfo}>{children}</CartsContext.Provider>
  );
};

export default CartsProvider;
