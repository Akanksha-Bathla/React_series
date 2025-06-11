import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

  const addValue = () => {
    setCount(count + 1)
    setCount(count + 1) // it is batching 

  }
  const removeValue = () => {
    setCount((count) => count - 1 )
    setCount((count) => count - 1 )
    setCount((count) => count - 1 ) // now it is not batching and it will run 3 times
  }

  return (
    <>
      <h1>React Course with Akanksha {count}</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add Value</button>{"  "}
      <button onClick={removeValue}>remove Value</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App
