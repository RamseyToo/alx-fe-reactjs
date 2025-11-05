import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/WelcomeMessage'
import WelcomeMessage from './components/WelcomeMessage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='h1'>
          Thi is my first js project
          <WelcomeMessage />
        </h1>
        < WelcomeMessage />
      </div>
      <WelcomeMessage />
    </>
  )
}

export default App
