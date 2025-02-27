import {useDispatch} from 'react-redux'
import { useState } from 'react'
import './App.css'
import authService from './appwrite/auth'
import { useEffect } from 'react'
import { login, logout } from './store/authSlice'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'

function App() {
  
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login({userData}))
        }
        else{
          dispatch(logout())
        }
      })
      .catch((error) => {
        console.error("Failed to fetch user data:", error);
        dispatch(logout())
      })  
      .finally(()=> setLoading(false))
  },[dispatch]);

  

  return !loading ? 
    (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header />
          <main>
            TODO: <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    ) : null
}

export default App
