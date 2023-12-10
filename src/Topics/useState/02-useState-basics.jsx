import React,{useState} from 'react'

const UseStateExample = () => {
    const [cout, setcout] = useState(0)
    const increament= ()=>{
        setcout(cout+1);
    }

  return (
    <div>
         <h1>Erroe Example</h1>
        <h2>Count = {cout}</h2>
        <button onClick={increament}>Increament</button>
    </div>
  )
}

export default UseStateExample