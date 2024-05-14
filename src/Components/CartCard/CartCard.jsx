import "./cartCard.css";

const CartCard = ({ cart }) => {
  const { place, data } = cart;
  return (
    <div className="cart-card">
      <div>
        <img src={place.img_url} alt="" />
        <h3>{place.name}</h3>
      </div>
      <div>
        <h3>{data.days} days</h3>
        <h3>$ {data.totalCost}</h3>
      </div>
    </div>
  );
};

export default CartCard;
