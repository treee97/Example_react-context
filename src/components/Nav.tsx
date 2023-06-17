import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";
import CartContext from "../context/CartContext";
import { useContext } from "react";
import "../styles/styles.css";
const Nav = () => {
  const { items } = useContext(CartContext);
  // console.log(item);

  return (
    <div className="nav">
      <Link to={"/"}>
        <h1>Wear</h1>
      </Link>
      <Link to={"/checkout"}>
        <AiFillShopping />
        <span>{items.length}</span>
      </Link>
    </div>
  );
};

export default Nav;
