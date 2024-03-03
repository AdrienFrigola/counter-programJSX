import React, {useState} from "react";

function Counter() {
    // Define state for count and setCount function to update count
    const [count, setCount] = useState(0);

    // Function to increment the count
    const increment = () => {
        setCount(count + 1);
    }

    // Function to decrement the count
    const decrement = () => {
        setCount(count - 1);
    }

    // Function to reset the count to 0
    const reset = () => {
        setCount(0);
    }

    // Return JSX elements for the counter component
    return(
        <div className="counter-container">
            {/* Display the current count */}
            <p className= "count-display">{count}</p>

            {/* Button to decrement the count */}
            <button className ="counter-button" onClick={decrement}>Decrement</button>

            {/* Button to reset the count */}
            <button className ="counter-button" onClick={reset}>Reset</button>

            {/* Button to increment the count */}
            <button className ="counter-button" onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;
