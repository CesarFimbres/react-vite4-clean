import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>App</h1>
      <p>yarn, vite, react, javascript </p>
    </div>
  )
}

export default App