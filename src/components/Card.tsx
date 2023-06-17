import { AiFillShopping } from "react-icons/ai";
import { IoShirtOutline } from "react-icons/io5";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import "../styles/styles.css";

interface ICardProps {
  name: string;
  price: number;
}
const Card = ({ name, price }: ICardProps) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="card" onClick={() => addToCart(name, price)}>
      <div className="product-box">
        <IoShirtOutline />
      </div>
      <div className="purchase">
        <h3>{name}</h3>
        <AiFillShopping />
      </div>
      <h4>{price}</h4>
    </div>
  );
};

export default Card;
