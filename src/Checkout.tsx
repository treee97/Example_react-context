import { useContext, useEffect } from "react";
import CartContext from "./context/CartContext";
type contextProp = {
  name: string;
  price: number;
};
const Checkout = () => {
  const { items } = useContext(CartContext);
  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <div>
      <h2>Checkout</h2>
      <div>
        {items.map((item: contextProp) => (
          <div>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
