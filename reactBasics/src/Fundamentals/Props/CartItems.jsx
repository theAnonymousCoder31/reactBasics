/* eslint-disable react/prop-types */
export default function CartItems({ item }) {
  return (
    <ul>
      <li key={item}>{item}</li>
    </ul>
  );
}
