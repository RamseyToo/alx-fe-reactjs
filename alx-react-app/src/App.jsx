import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/WelcomeMessage'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer  from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h2'>
      <Header />
    </div>
      <div>
        <h1 className='h1'>
          Thi is my first js project
         
        </h1>
        < WelcomeMessage />
      </div>
      <main>
        <MainContent />
      </main>
      <WelcomeMessage />
      <footer>
        <Footer />
      </footer>

    </>

  )
}

export default App
