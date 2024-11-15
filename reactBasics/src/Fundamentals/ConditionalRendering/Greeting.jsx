/* eslint-disable react/prop-types */
function Greeting({ timeOfDay }) {
  const myName = "Krishna Prasad";

  const currentDate = new Date();

  return (
    <div>
      <h1>
        {timeOfDay === "morning" ? "Good Morning" : "Good Evening"}, {myName}
      </h1>
      <p>Log In Date: {currentDate.toLocaleDateString()}</p>
    </div>
  );
}

export default Greeting;
