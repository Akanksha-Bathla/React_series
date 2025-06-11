import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3">
      <Card 
        image="https://images.pexels.com/photos/17741617/pexels-photo-17741617/free-photo-of-seashells-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
        title="Seashells on a Beach"
        description="A serene view of seashells scattered on a beach, with gentle waves lapping at the shore."
      />
      <Card 
        image="https://images.pexels.com/photos/29050586/pexels-photo-29050586/free-photo-of-fresh-homemade-scones-with-pink-roses-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        title="Fresh homemade scones with pink roses"
        description="A delightful arrangement of fresh homemade scones with pink roses in the background, perfect for a cozy afternoon tea."
      />
      <Card />
    </div>
  )
}

export default App
