


import { useState } from 'react'
import './Counter.css'
import './CounterButton.jsx'
import CounterButton from './CounterButton.jsx'




export default function Counter(){
    const [count,setCount] = useState(0)

    function incremetCounterParentFunction(by){
        setCount(count+by)
    }
    function decrementCounterFunction(by){
        setCount(count-by)
    }
    function resetToNull() {
        setCount(0);
      }
    return(
        <>
        <span className='totalCount'>{count}</span>
        <CounterButton by={1} 
        incrementMethod={incremetCounterParentFunction} 
        decrementMethod={decrementCounterFunction} />
        <CounterButton by={2} 
        incrementMethod={incremetCounterParentFunction} 
        decrementMethod={decrementCounterFunction} />
        <CounterButton by={5} 
        incrementMethod={incremetCounterParentFunction} 
        decrementMethod={decrementCounterFunction} />
        <button className="resetButton" onClick={resetToNull}>Reset</button>
        </>
    )
}
    




  
