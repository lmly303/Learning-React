import { useState } from 'react'
import Header from './components/header/header'
import Home from './components/Home/home'
import Footer from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
