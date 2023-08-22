import { useState } from "react"


export const useCounter = ( initialValue ) => {

    const [counter, setCounter] = useState(initialValue = 10);

    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        //if(counter === 0 ) return;
        setCounter( counter - 1 );
    }

    const reset = () => {
        setCounter( initialValue );
    }


    return {
        counter,
        increment,
        decrement,
        reset
    }
}