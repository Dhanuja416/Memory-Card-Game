import { GameHeader } from './Components/GameHeader'
import { Card } from './Components/Card'
import { useState } from 'react'

import './App.css'

const cardValues = [ 
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className ="app">
      <GameHeader score={3} moves={10}/>

      <div className="cards-grid">
        {cardValues.map((card)=>(
          <Card card = {card}
          />
        ))}

      </div>
    </div>
  )
}

export default App
