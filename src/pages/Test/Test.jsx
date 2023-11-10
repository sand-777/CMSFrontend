import React, { useState } from 'react'

const Test = () => {
  // var count = 0;
  const [count,setCount] = useState(0)
  const increaseCount = ()=>{
    setCount(count+1)
    console.log(count)
  }
  const decreaseCount = ()=>{
    setCount(count-1)
    console.log(count)
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
      
    </div>
  )
}

export default Test