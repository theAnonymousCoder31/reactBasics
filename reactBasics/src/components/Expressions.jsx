const Expressions = () => {
  const myName = "Krishna Prasad";
  const multiply = (a, b) => a * b;
  const specialClass = "special";

  return (
    <section>
      <h1>Expressions in JSX</h1>
      <p>This is {myName}</p>
      <p> I'm {20 + 4} years old</p>
      <p>My favorite color is {Math.random() > 0.5 ? "blue" : "red"}</p>
      <p>The product of 2 and 3 is {multiply(2, 3)}</p>
      <p className={specialClass}> This is a special class</p>
    </section>
  );
};

export default Expressions;