import { useState } from 'react'

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue )
  

    const increment = ( e, value = 1 ) => {
        setCounter( counter + value )
    }
    
    const decrement = ( e, value = 1 ) => {
        setCounter( counter - value )
    }
    
    const reset = () => {
        setCounter( initialValue )
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}
