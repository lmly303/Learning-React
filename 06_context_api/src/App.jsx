import { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/PRofile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>HEllo world</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
