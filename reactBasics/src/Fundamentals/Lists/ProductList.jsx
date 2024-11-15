// Working with Arrays and destructuring

export default function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 999.99, available: "In stock" },
    { id: 2, name: "Phone", price: 599.99, available: "Out of stock" },
    { id: 3, name: "Tablet", price: 399.99, available: "In stock" },
  ];

  return (
    <main>
      {products.map(({ id, name, price, available }) => (
        <ul key={id}>
          <li>
            {name} - ${price} - {available}
          </li>
        </ul>
      ))}
      ;
    </main>
  );
}
