import { useState } from 'react'
import Youtube from './Youtube'

function App() {
  const name = 'React';

  return (
    <>
    <h1>Hello, World! {2+1}</h1>
    <Youtube/>
    <h1>Hello, World! {(name)?"yes":"no"}</h1> 

    </>
  )
}

export default App
// ternary operator works 