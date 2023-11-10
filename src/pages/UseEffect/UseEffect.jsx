import React from 'react'
import { useEffect,useState } from 'react'


const UseEffect = () => {
    const[count,setCount] = useState(0)
    const[decreaseCount,setDecreaseCount] = useState(0)
//function to increase count value

const increaseCount =  ()=>{
    setCount(count+1);
}
const handleDecrease = ()=>{
    setDecreaseCount(decreaseCount-1);
}
    //kohi manxey first time site ma aauda or first time mount huda 

    useEffect(()=>{
       
    //    console.log("welcome too site")
    //    //backend bata kehi lyauney pathauney
    },[])

    // useEffect(()=>{
    //     //ahile count ko kati value cha tyo backend samma puraidey
    //     if(count !==0 || decreaseCount !==0){
    //         document.title = count;
    //     console.log("Count value Changed")
    //     }
    // },[count,decreaseCount])
useEffect(()=>{
    console.log("bye world")
})

  return (
    <div>
    <div>{count}</div>
    
    <button onClick={increaseCount}>+</button>
    <div>{decreaseCount}</div>
    <button onClick={handleDecrease}>-</button>
    </div>
    
  )
}

export default UseEffect