function Greeting(){

    const myName = "Krishna Prasad";
    
    const currentDate = new Date();
    const randomGreeting = Math.random() > 0.5 ? "Hello" : "Welcome";


    return (
        <div>
            <h1>{randomGreeting}, {myName}</h1>
            <p>Log In Date: {currentDate.toLocaleDateString()}</p>
        </div>
    )
};

export default Greeting;