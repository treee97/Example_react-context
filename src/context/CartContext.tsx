import { createContext, useState } from "react";

const CartContext = createContext<any>(null);

type cartProps = {
  children: React.ReactNode;
};

type itemProps = {
  name: string;
  price: number;
};
export function CartProvider({ children }: cartProps) {
  const [items, setItems] = useState<itemProps[]>([]);

  const addToCart = (name: string, price: number) => {
    setItems((prevState) => [...prevState, { name, price }]);
    console.log(items);
  };
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
