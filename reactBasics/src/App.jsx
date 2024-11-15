// Sending Props to a Component
// Communication between Components

// Importing Components into the App

/* 

import StyleCard from "./Fundamentals/UnderstandingStyles/StyleCard";
import ProfileCard from "./Fundamentals/UnderstandingStyles/ProfileCard";
import IconComponent from "./Fundamentals/UnderstandingStyles/IconComponent";

import Person from "./components/Person";
import CartItems from "./components/CartItems";
*/

import Weather from "./Fundamentals/ConditionalRendering/Weather";
import UserStatus from "./Fundamentals/Props/UserStatus";
import Greeting from "./Fundamentals/ConditionalRendering/Greeting";

// Creating objects

/*
  const PersonData = [
  {
    name: "Krishna Prasad",
    age: 24,
  },
  {
    name: "Pavan Kumar",
    age: 19,
  },
];

const cartItems = ["Laptop", "Phone", "Tablet", "Watch", "Playstation"];

*/

//Creating Components inline

/*

const validPassword = () => <h1>Valid Password</h1>;
const invalidPassword = () => <h1>Invalid Password</h1>;


TODO: Using conditional rendering to display components

const Password = ({ password }) => {
  return (
    <div>{password === "HelloWorld" ? validPassword() : invalidPassword()}</div>
  );
};

TODO : Using conditional rendering to display components - II 

function CartMessage() {
  return (
    <div>
      <h1>Cart 🛒</h1>
      <br></br>
      {cartItems.length > 0 ? (
        <h2>You have {cartItems.length} items in your cart</h2>
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </div>
  );
}

TODO : Using map() method to render components and sending props to child components

function App() {
  return (
    <div>
      {PersonData.map((person) => (
        <Person name={person.name} age={person.age} key={person.name} />
      ))}
      <Password password="HelloWorld" />
      <CartMessage />
      {cartItems.map((item) => (
        <CartItems key={item} item={item} />
      ))}
    </div>
  );
}
  
}
*/

// TODO : Calling multiple components with props data
function App() {
  return (
    <div>
      <h1>Conditional Rendering in React </h1>
      {/* Weather Component */}
      <h2>Weather Forecast ☁️🌡️</h2>
      <Weather temperature={24} />
      {/* UserStatus Component */}
      <UserStatus loggedIn={true} isAdmin={false} />
      {/* Greeting Component */}
      <Greeting timeOfDay="evening" />
    </div>
  );
}

export default App;
