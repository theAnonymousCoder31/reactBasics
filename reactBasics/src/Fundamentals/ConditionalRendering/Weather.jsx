/* eslint-disable react/prop-types */

// Using Conditional Rendering with ternary operator

export default function Weather({ temperature }) {
  return (
    <div>
      {temperature < 15 ? (
        <h2>It is cold outside</h2>
      ) : temperature >= 15 && temperature < 25 ? (
        <h2>It is warm outside</h2>
      ) : (
        <h2>It is hot outside</h2>
      )}
    </div>
  );
}
