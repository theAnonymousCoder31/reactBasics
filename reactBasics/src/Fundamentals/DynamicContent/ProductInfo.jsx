// Working with Objects

export default function ProductInfo() {
  const product = {
    name: "Laptop",
    description: "Brand New Apple Macbook Pro",
    price: 999.99,
    available: "In stock",
  };
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>{product.available}</p>
    </div>
  );
}
