import Card from "./components/Card";
import "./styles/styles.css";
const Products = () => {
  const products = [
    { name: "shirt", price: 50 },
    { name: "vest", price: 20 },
    { name: "pants", price: 10 },
    { name: "shorts", price: 32 },
    { name: "socks", price: 50 },
    { name: "sweater", price: 30 },
  ];
  return (
    <div className="products-name">
      {products.map((item, index) => (
        <Card key={index} name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default Products;
