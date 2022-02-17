import React, { useState } from 'react'

const Count=()=> {
    const [count, setcount]=useState(0)
    const Countup=()=>{
        setcount(prevState=>prevState+1)
    }
    const CountDown=()=>{
        setcount(prevState=>prevState-1)
    }
  return (
    <div>
        <h2>count:{count}</h2>
        <button onClick={Countup}>+</button>
        <button onClick={CountDown}>-</button>
    </div>
  )
}

export default Count